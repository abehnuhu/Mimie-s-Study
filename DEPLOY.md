# Deploying Mimie's Study — GitHub + Vercel

This guide takes you from the project files to a live website with a real URL.
No paid services needed — GitHub, Vercel, and Neon all have free tiers that are enough for this app.

## Before you start: how the database works

- **On your computer**: the app uses a SQLite file (`db/custom.db`) that is included, already seeded with the full curriculum. It works out of the box.
- **On Vercel**: Vercel runs the app on serverless infrastructure with a read-only filesystem. SQLite **cannot save data there** — logging in, progress, XP and streaks would fail.
- **The fix**: a free hosted Postgres database (Neon) + one small config change + one environment variable. It takes about 10 minutes and is explained in **Step 4**. You can do the GitHub + Vercel parts first and add the database right after.

## Step 1 — Put the files on GitHub

### Getting the source: the one-URL download

The app packages itself: while signed in through the **staff entrance** (see "Admin access" below), simply open

```
/mimies-study.zip
```

on the site — in the preview, click **Open in new tab** first and type it in the address bar. You get a fresh `mimies-study.zip` (~40–56 MB) with the whole codebase, all images, docs **and the seeded `db/custom.db`** (accounts + full curriculum). It skips `node_modules`, `.git` and secrets (`.env`) — so after unzipping: `bun install`, copy `.env.example` to `.env`, `bun run dev`.

> The URL works for anyone, but the `db/custom.db` database file is only packed in when the downloader is signed in as the admin — anonymous visitors get the source without the database (it can be recreated with `bun run db:push` + `npx tsx prisma/seed.ts`).
> There's also a download button in **Admin Studio → Settings → Project**.

1. Extract the project zip on your computer (if you downloaded one).
2. On github.com, create a new repository:
   - Name it whatever you like, e.g. `mimies-study`
   - Choose Public or Private (both work fine with Vercel)
   - **Do NOT tick** "Add a README", ".gitignore" or "license" — the repo must be empty
3. Get the files into the repo using **one** of these:

   **Option A — git command line (recommended, also how you push future updates):**

   ```bash
   cd mimies-study        # the extracted project folder
   git init
   git add .
   git commit -m "Mimie's Study"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/mimies-study.git
   git push -u origin main
   ```

   On the first push, a browser window opens and GitHub asks you to log in / authorize — accept it.

   **Option B — GitHub Desktop (no command line):** install it from desktop.github.com, log in, then `File → Add Local Repository…` (or "Create a New Repository"), point it at the extracted folder, and click **Publish**.

   **Option C — upload in the browser:** open the empty repo page → "Add file" → "Upload files" → drag the **contents** of the extracted folder (all files and folders, **not the zip itself** — GitHub does not unzip).
   Note: browser upload is limited (~100 files per drag), so if it complains, use Option A or B.

> **Replacing a repo that already has an older copy of the project?** Extract the fresh zip over your local clone (or start from the extracted zip), then push with force so GitHub takes the new state as-is:
> ```bash
> git init
> git add .
> git commit -m "Replace with latest version"
> git branch -M main
> git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
> git push --force -u origin main
> ```
> Vercel redeploys automatically after the push. Your Vercel environment variables (Neon `DATABASE_URL`, `ADMIN_ACCESS_KEY`) survive the replace — nothing to set up again. Already-uploaded music tracks live in the database you pointed Vercel at, so they're safe too; only the sandbox's own music library (if any) needs re-uploading from the Music tab.

4. Refresh the repo page — you should see `package.json`, `src/`, `prisma/`, `public/`, `db/` etc.

## Step 2 — Deploy on Vercel

1. Go to vercel.com → **Continue with GitHub** (use the same GitHub account).
2. Dashboard → **Add New… → Project** → find `mimies-study` → **Import**.
3. Framework Preset: **Next.js** (auto-detected). Leave everything else on default.
4. Open **Environment Variables** and add (you can also add this later):
   - `DATABASE_URL` = your Neon connection string from Step 4
5. Click **Deploy** and wait ~2 minutes.
6. Done — you now have a live URL like `https://mimies-study.vercel.app`.
   Mimie creates her own account on the login page (**Create account** tab) — no credentials to hand out.

Every future `git push` to GitHub automatically redeploys the site.

## Admin access (owner only)

The admin portal is reached through the small lock icon at the bottom of the login card ("Staff sign in"). It asks for the admin email, the admin password **and an admin key** — so the portal stays yours even if someone learns the password:

| Field     | Value                                                                                       |
| --------- | ------------------------------------------------------------------------------------------- |
| Email     | `admin@mimies.study`                                                                        |
| Password  | `admin2026` (created by the seed — change it before going public, see below)                 |
| Admin key | Your `ADMIN_ACCESS_KEY` env value — `mimie-admin-2026` by default, **set your own on Vercel** |

> Tip: if you sign in on the student tab with the admin email, the error message now includes an **"Open the staff entrance"** button that takes you straight to the right form with your email kept.
> The admin key field also shows where the key comes from (`.env` locally, Vercel environment variables in production).

1. In Vercel → your project → **Settings → Environment Variables** → set:
   - `ADMIN_ACCESS_KEY` = your own secret key (anything hard to guess — do **not** keep the default `mimie-admin-2026`)
2. Redeploy so the variable takes effect.
3. Keep the admin email and password private — the password is stored scrypt-hashed in the database, so there's no in-app "change password" screen yet. If it ever leaks, the safe fix is to update the hash in the DB (or re-run the seed on a fresh DB) with a new password. For now: keep credentials private and don't share them.

Normal sign-in always rejects admin accounts ("Admin accounts sign in through the staff entrance"), so the staff entrance is the only door to the admin side.

## Step 3 — Custom domain (optional)

Vercel → your project → **Settings → Domains** → add your domain and follow the DNS instructions shown there.

## Step 4 — Set up the production database (Neon, free)

This makes logins, progress, XP and streaks work on your live site.

1. Go to neon.tech → sign up (free, no credit card) → **Create project** (pick a region close to your users).
2. On the project dashboard, copy the **connection string** — it starts with `postgresql://...`.
3. One-time setup, on your computer, inside the project folder:
   1. Edit `prisma/schema.prisma` and change one line:
      ```prisma
      datasource db {
        provider = "postgresql"   // was "sqlite"
        url      = env("DATABASE_URL")
      }
      ```
   2. Create the tables, seed ALL the lesson content (478 lessons + 8 flagship lessons), and attach the real-life photos:
      ```bash
      DATABASE_URL="postgresql://...your-neon-string..." npx prisma db push
      DATABASE_URL="postgresql://...your-neon-string..." npx tsx prisma/seed.ts
      DATABASE_URL="postgresql://...your-neon-string..." npx tsx prisma/fill-empty-lessons.ts
      ```
      (If you installed Bun, you can use `bun` instead of `npx tsx`.)
      - `seed.ts` creates the curriculum + every lesson's written content, quizzes, flashcards and sources.
      - `fill-empty-lessons.ts` is idempotent — it attaches the real-photo library to lessons and upserts the games. Safe to re-run anytime.
   3. Commit and push the schema change:
      ```bash
      git add prisma/schema.prisma
      git commit -m "Switch database to Postgres for production"
      git push
      ```
4. In Vercel → your project → **Settings → Environment Variables** → set:
   - `DATABASE_URL` = the Neon connection string (tick Production, Preview and Development)
   - `ADMIN_ACCESS_KEY` = your own secret admin key (see “Admin access” above)
5. Vercel → **Deployments** → latest one → the **…** menu → **Redeploy**.

Your live site now stores all data properly.

## Notes and limits

- **The "Listen" button (text-to-speech)** calls a voice API that is only configured inside the build sandbox. On Vercel it shows an error toast until you add your own Z.ai voice API keys as environment variables. Everything else works normally.
- **GitHub Pages cannot host this app** — it is a full-stack app (server code + database), not a static site. Vercel is the right home.
- Local development on your machine: `bun install` (or `npm install`), copy `.env.example` to `.env`, then `bun run dev` (or `npm run dev`). The included `db/custom.db` already has all content.
