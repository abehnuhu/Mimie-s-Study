# Mimie's Study

A gamified midwifery learning academy — a single-page study app for midwifery students.
Follow the curriculum, take quizzes, play review games, and watch your XP, level, and study streak grow.

## What's inside

- **Dashboard** — daily goal, streak, XP/level progress, continue-where-you-left-off
- **Curriculum browser** — years → semesters → courses → modules → lessons (Ghana Health Service / WHO-aligned content)
- **Rich lessons** — structured sections, key points, clinical notes, source references, and text-to-speech narration ("Listen")
- **Quizzes** — full question bank with instant feedback and attempt history
- **Flashcards & spaced repetition** — review items resurface until mastered
- **Games** — drag-and-drop term matching and a timed exam simulator
- **Progress tracking** — lesson completion, daily activity heatmap, quiz analytics charts
- **Gamification** — XP engine, levels, badges, and personal messages from the narrator
- **Admin panel** — user and content management
- **PWA** — installable, with offline support for visited pages
- **Dark and light theme**

## Tech stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Prisma ORM (SQLite) · Zustand · TanStack Query · Framer Motion · Recharts · cookie-session auth

## Quick start (local)

```bash
bun install        # or: npm install
cp .env.example .env
bun run dev        # or: npm run dev
```

The repository ships with the fully seeded database at `db/custom.db`, so the app works immediately.

### Accounts

- **There is no demo student account.** Mimie signs up herself on the login page — open the app, switch to **Create account**, and enter her name, email and password. That's it.
- **Owner (admin) account** — kept out of the UI on purpose. The admin portal is reachable only through the small lock icon at the bottom of the login card ("Staff sign in"), which asks for email, password **and an admin key**:

  | Field     | Value               |
  | --------- | ------------------- |
  | Email     | admin@mimies.study  |
  | Password  | admin2026           |
  | Admin key | `ADMIN_ACCESS_KEY` env value (`mimie-admin-2026` by default — see `.env`) |

  Regular sign-in refuses admin accounts ("Admin accounts sign in through the staff entrance"), so the admin account is useless without the key.

  > **Before going public:** change the admin password and set your own `ADMIN_ACCESS_KEY` in the environment. The password is stored scrypt-hashed in the database, so changing it means re-hashing a new value — keep credentials private and out of any shared files.

To re-seed from scratch: `bunx prisma db push`, then `bunx prisma/seed.ts`, then `bunx prisma/fill-empty-lessons.ts` (attaches the real-photo library and games — idempotent, safe to re-run). The seed creates only the admin account — students register themselves.

## Deploying

See **[DEPLOY.md](./DEPLOY.md)** for the step-by-step guide: push this repo to GitHub, then deploy it to Vercel with a free hosted Postgres database.
