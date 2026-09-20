/**
 * Upsert game catalogue rows idempotently — create new slugs only.
 * Safe to re-run: existing rows are never modified, progress is preserved.
 * Run: bun prisma/upsert-games.ts
 */
import { PrismaClient } from "@prisma/client";
import { games } from "./seed-data/gamification";

const db = new PrismaClient();

async function main() {
  let created = 0;
  let existing = 0;
  for (const g of games) {
    const found = await db.game.findUnique({ where: { slug: g.slug } });
    if (found) {
      existing++;
      continue;
    }
    await db.game.create({
      data: { slug: g.slug, title: g.title, description: g.description, icon: g.icon, xpReward: g.xpReward, unlockLevel: g.unlockLevel },
    });
    created++;
    console.log(`  + game "${g.slug}" (${g.title})`);
  }
  console.log(`Games: ${created} created, ${existing} already present.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
