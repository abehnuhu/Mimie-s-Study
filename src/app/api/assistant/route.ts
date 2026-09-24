import { withUser } from "@/lib/api-helpers";

export const dynamic = "force-dynamic";

interface ChatMsg {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGES = 20;
const MAX_CHARS_PER_MSG = 2000;
const MAX_CONTEXT_CHARS = 400;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 40;
const ZAI_MODEL = "glm-4.5-flash";

const rateHits = new Map<string, number[]>();

function rateLimited(userId: string): boolean {
  const now = Date.now();
  const hits = (rateHits.get(userId) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) {
    rateHits.set(userId, hits);
    return true;
  }
  hits.push(now);
  rateHits.set(userId, hits);
  if (rateHits.size > 500) {
    for (const [k, v] of rateHits) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) rateHits.delete(k);
    }
  }
  return false;
}

function systemPrompt(context: string, nickname: string, yearInfo: string): string {
  return `You are Mimie's Study Companion — the friendly AI tutor living inside "Mimie's Study", a study web app for a nursing student in Ghana (general nursing + midwifery curriculum, NMC Ghana / Ghana College of Nurses & Midwives context).

Your voice:
- Warm, encouraging, big-sisterly. Simple plain English, short paragraphs. At most one 💗 emoji per reply.
- Address her by name (${nickname || "dear"}) once in a while, not every message.
- Celebrate effort, not just correctness. If she seems stressed, be gentle and practical.

What you help with:
- Explaining curriculum concepts: anatomy & physiology, medical-surgical nursing, midwifery, community health, mental health, ethics, research methods.
- Quizzing her on request, making mnemonics and memory tricks, summarising topics, planning study time.
- How to use the app: lessons, quizzes, exam mode, games, flashcards, review queue, report cards — she navigates with the sidebar (Learn) and the games tab.

Ground rules:
- You are for STUDYING, not real patients. If a question sounds like a real patient / real emergency, tell her warmly to follow her local protocol and call her senior or clinical supervisor NOW, then offer to study the topic together.
- Never invent drug doses or protocols. Teach the principle and remind her to confirm exact doses in her lesson, textbook (Myles / Potter & Perry), or local WHO-based protocol.
- If a question is far outside nursing / studying / this app, gently steer back to her studies.
- Keep answers short (under ~180 words) unless she asks for a deep dive or a quiz.

${context ? `Right now: ${context}\n` : ""}She is ${yearInfo}.`;
}

function sanitizeMessages(raw: unknown): ChatMsg[] {
  if (!Array.isArray(raw)) return [];
  const out: ChatMsg[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") continue;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string" || !content.trim()) continue;
    out.push({ role, content: content.slice(0, MAX_CHARS_PER_MSG) });
  }
  return out.slice(-MAX_MESSAGES);
}

export async function POST(req: Request) {
  return withUser(req, async (req2, { user }) => {
    if (rateLimited(user.id)) {
      return Response.json(
        { error: "Mimie needs a little breather 💗 — try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await req2.json().catch(() => ({}));
    const messages = sanitizeMessages((body as { messages?: unknown }).messages);
    if (messages.length === 0) {
      return Response.json({ error: "Ask me anything 💗" }, { status: 400 });
    }
    const rawContext = (body as { context?: unknown }).context;
    const context =
      typeof rawContext === "string" ? rawContext.trim().slice(0, MAX_CONTEXT_CHARS) : "";

    const nickname = user.nickname || user.name || "";
    const yearInfo = `a Year ${user.currentYear} nursing student (semester ${user.currentSemester})`;

    const zaiMessages = [
      { role: "system", content: systemPrompt(context, nickname, yearInfo) },
      ...messages,
    ];

    const apiKey = process.env.ZAI_API_KEY;
    if (!apiKey) {
      console.error("[assistant] Missing ZAI_API_KEY");
      return Response.json({ error: "Mimie is unavailable 💗" }, { status: 502 });
    }

    let upstream: Response;
    try {
      upstream = await fetch("https://api.z.ai/api/paas/v4/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: ZAI_MODEL,
          messages: zaiMessages,
          stream: true,
        }),
      });
    } catch (e) {
      console.error("[assistant]", e);
      return Response.json(
        { error: "Mimie is a little busy right now — try again in a moment 💗" },
        { status: 502 }
      );
    }

    if (!upstream.ok || !upstream.body) {
      console.error("[assistant] upstream error", upstream.status);
      return Response.json(
        { error: "Mimie is a little busy right now — try again in a moment 💗" },
        { status: 502 }
      );
    }

    // Transform Z.ai's SSE stream into plain text chunks the browser can read directly.
    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    const stream = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          return;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const delta = json?.choices?.[0]?.delta?.content;
            if (typeof delta === "string" && delta.length > 0) {
              controller.enqueue(new TextEncoder().encode(delta));
            }
          } catch {
            // ignore malformed chunk
          }
        }
      },
      cancel() {
        reader.cancel();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  });
}