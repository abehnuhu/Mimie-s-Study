import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const bookmarks = await db.bookmark.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return Response.json({
      bookmarks: bookmarks.map((b) => ({
        id: b.id,
        itemType: b.itemType,
        itemId: b.itemId,
        label: b.label,
        snippet: b.snippet,
        createdAt: b.createdAt,
      })),
    });
  });
}

export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const itemType = ["lesson", "pearl", "flashcard", "question"].includes(String(body.itemType))
      ? String(body.itemType)
      : null;
    const itemId = String(body.itemId ?? "");
    const label = String(body.label ?? "").slice(0, 160);
    const snippet = body.snippet ? String(body.snippet).slice(0, 300) : null;
    if (!itemType || !itemId || !label) {
      return Response.json({ error: "Missing bookmark details 💗" }, { status: 400 });
    }
    await db.bookmark.upsert({
      where: { userId_itemType_itemId: { userId: user.id, itemType, itemId } },
      create: { userId: user.id, itemType, itemId, label, snippet },
      update: { label, snippet },
    });
    return Response.json({ ok: true });
  });
}

export async function DELETE(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const url = new URL(_req.url);
    const itemType = url.searchParams.get("itemType") ?? "";
    const itemId = url.searchParams.get("itemId") ?? "";
    if (!itemType || !itemId) {
      return Response.json({ error: "Missing bookmark key 💗" }, { status: 400 });
    }
    await db.bookmark.deleteMany({ where: { userId: user.id, itemType, itemId } });
    return Response.json({ ok: true });
  });
}
