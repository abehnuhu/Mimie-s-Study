import { withUser } from "@/lib/api-helpers";

// in-memory audio cache: key = voice|speed|text → WAV buffer (bounded)
const audioCache = new Map<string, Buffer>();
const CACHE_MAX = 60;

function cacheKey(text: string, voice: string, speed: number) {
  return `${voice}|${speed}|${text}`;
}

/** Expand common medical/clinical abbreviations so the voice reads them naturally. */
function prepareText(raw: string): string {
  let text = raw.replace(/\s+/g, " ").trim();
  const expansions: [RegExp, string][] = [
    [/\bPPH\b/g, "postpartum haemorrhage"],
    [/\bAPH\b/g, "antepartum haemorrhage"],
    [/\bANC\b/g, "antenatal care"],
    [/\bBP\b/g, "blood pressure"],
    [/\bCCT\b/g, "controlled cord traction"],
    [/\bCHPS\b/g, "C-H-P-S"],
    [/\bGHS\b/g, "Ghana Health Service"],
    [/\bNMC\b/g, "Nursing and Midwifery Council"],
    [/\bWHO\b/g, "World Health Organization"],
    [/\bIV\b/g, "intravenous"],
    [/\bIM\b/g, "intramuscular"],
    [/\bPR\b/g, "per rectum"],
    [/\bPV\b/g, "per vaginam"],
    [/\bSVD\b/g, "spontaneous vaginal delivery"],
    [/\bIUGR\b/g, "intrauterine growth restriction"],
    [/\bLBW\b/g, "low birth weight"],
    [/&/g, "and"],
  ];
  for (const [re, full] of expansions) text = text.replace(re, full);
  return text;
}

export async function POST(req: Request) {
  return withUser(req, async (r) => {
    let body: { text?: unknown; speed?: unknown };
    try {
      body = await r.json();
    } catch {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    const raw = typeof body.text === "string" ? body.text : "";
    const text = prepareText(raw).slice(0, 900);
    if (!text) {
      return Response.json({ error: "Nothing to say 💗" }, { status: 400 });
    }

    const speed = typeof body.speed === "number" && body.speed >= 0.5 && body.speed <= 2 ? body.speed : 0.95;
    const voice = "jam"; // British English — matches Ghanaian clinical teaching

    const key = cacheKey(text, voice, speed);
    const cached = audioCache.get(key);
    if (cached) {
      return new Response(new Uint8Array(cached), {
        headers: { "Content-Type": "audio/wav", "Cache-Control": "private, max-age=86400" },
      });
    }

    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const zai = await ZAI.create();
    const response = await zai.audio.tts.create({
      input: text,
      voice,
      speed,
      response_format: "wav",
      stream: false,
    });
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));
    if (buffer.length === 0) {
      return Response.json({ error: "Voice not available right now 💗" }, { status: 502 });
    }

    if (audioCache.size >= CACHE_MAX) {
      const oldest = audioCache.keys().next().value;
      if (oldest) audioCache.delete(oldest);
    }
    audioCache.set(key, buffer);

    return new Response(new Uint8Array(buffer), {
      headers: { "Content-Type": "audio/wav", "Cache-Control": "private, max-age=86400" },
    });
  });
}
