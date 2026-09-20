"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Heart,
  KeyRound,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  User,
} from "lucide-react";
import { HeartbeatLine, FloatingDecor } from "./decor";
import { toast } from "sonner";
import type { SessionUser } from "@/lib/types";

type Mode = "signin" | "signup" | "staff";

const modeAnim = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
};

export function LoginView({ onLogin }: { onLogin: (user: SessionUser) => void }) {
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [year, setYear] = useState("1");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function switchMode(next: Mode) {
    setError(null);
    setShowPw(false);
    setMode(next);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const endpoint =
        mode === "signin"
          ? "/api/auth/login"
          : mode === "signup"
            ? "/api/auth/signup"
            : "/api/auth/admin-login";
      const payload =
        mode === "signin"
          ? { email, password }
          : mode === "signup"
            ? { name, email, password, year: Number(year) }
            : { email, password, adminKey };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "That didn't work. Try again 💗");
        return;
      }
      if (mode === "signup") {
        toast(`Welcome to Mimie's Study, ${data.user.name} 💗`, {
          description: "Your little corner is ready — let's begin gently.",
        });
      } else if (mode === "staff") {
        toast(`Welcome back, ${data.user.name} 💗`, {
          description: "The studio is yours today.",
        });
      } else {
        toast(`Welcome back, ${data.user.name} 💗`, { description: "Let's make today count, gently." });
      }
      // fetch full user object
      const me = await fetch("/api/auth/me", { cache: "no-store" }).then((r) => r.json());
      onLogin(me.user);
    } catch {
      setError("We lost the connection for a moment. Your progress is safe 💗");
    } finally {
      setLoading(false);
    }
  }

  const errorBox = error && (
    <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
      {error}
    </p>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="gradient-hero absolute inset-0" aria-hidden />
      <FloatingDecor />
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 py-10 lg:flex-row lg:gap-20">
        {/* ── brand side ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md text-center lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur">
            <Stethoscope className="h-3.5 w-3.5" aria-hidden />
            MIDWIFERY LEARNING ACADEMY
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
            Mimie&apos;s
            <br />
            <span className="text-gradient italic">Study</span>
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground">
            Her little corner to become an amazing midwife.
            <br />
            Study smart. Grow confident. One beautiful day at a time.
          </p>
          <HeartbeatLine className="mt-6 h-12 w-full max-w-xs text-primary/70 mx-auto lg:mx-0" />
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {["Year 1 → Year 4", "Clinical cases", "Smart review", "15 games"].map((f) => (
              <span key={f} className="rounded-full bg-card/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur border border-border/60">
                {f}
              </span>
            ))}
          </div>
        </motion.section>

        {/* ── login card ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm"
        >
          <Card
            className={
              mode === "staff"
                ? "glass card-hover overflow-hidden py-0 border-plum/40 shadow-xl shadow-plum/20"
                : "glass card-hover border-border/70 shadow-xl shadow-primary/10"
            }
          >
            {mode === "staff" && (
              <div className="flex items-center gap-3 bg-gradient-to-r from-plum to-primary px-6 py-4 text-primary-foreground">
                <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden />
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold leading-tight">Staff entrance</h2>
                  <p className="text-xs text-primary-foreground/85">Owner access only</p>
                </div>
              </div>
            )}

            <CardContent className="p-6">
              {mode !== "staff" && (
                <div
                  className="mb-6 grid grid-cols-2 gap-1 rounded-full bg-muted/70 p-1"
                  role="tablist"
                  aria-label="Sign in or create an account"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "signin"}
                    onClick={() => switchMode("signin")}
                    className={`flex h-11 items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${
                      mode === "signin"
                        ? "bg-card text-foreground shadow-sm border border-border/60"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "signup"}
                    onClick={() => switchMode("signup")}
                    className={`flex h-11 items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${
                      mode === "signup"
                        ? "bg-card text-foreground shadow-sm border border-border/60"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Create account
                  </button>
                </div>
              )}

              <AnimatePresence mode="wait" initial={false}>
                {mode === "signin" && (
                  <motion.form key="signin" onSubmit={submit} className="space-y-4" {...modeAnim}>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground">
                        <Heart className="h-5 w-5 fill-current" aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-foreground">Welcome back</h2>
                        <p className="text-xs text-muted-foreground">Your study world missed you</p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 pl-9"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="password"
                          type="password"
                          autoComplete="current-password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="h-11 pl-9"
                          required
                        />
                      </div>
                    </div>

                    {errorBox}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-95"
                      size="lg"
                    >
                      {loading ? "Opening your study world…" : "Continue learning"}
                      <Sparkles className="h-4 w-4" aria-hidden />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      New here? Tap <span className="font-medium text-foreground">Create account</span> and make it yours 💗
                    </p>
                  </motion.form>
                )}

                {mode === "signup" && (
                  <motion.form key="signup" onSubmit={submit} className="space-y-4" {...modeAnim}>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground">
                        <Sparkles className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-foreground">Create your account</h2>
                        <p className="text-xs text-muted-foreground">A warm little welcome awaits</p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="name">Your name</Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Mimie"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-11 pl-9"
                          required
                          minLength={2}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="signup-email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 pl-9"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="signup-password"
                          type={showPw ? "text" : "password"}
                          autoComplete="new-password"
                          placeholder="8+ characters, a letter & a number"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="h-11 pl-9 pr-12"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPw((v) => !v)}
                          aria-label={showPw ? "Hide password" : "Show password"}
                          aria-pressed={showPw}
                          className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        >
                          {showPw ? <EyeOff className="h-4 w-4" aria-hidden /> : <Eye className="h-4 w-4" aria-hidden />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="year">Starting year (optional)</Label>
                      <Select value={year} onValueChange={setYear}>
                        <SelectTrigger id="year" className="h-11 w-full">
                          <SelectValue placeholder="Which year are you in?" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map((y) => (
                            <SelectItem key={y} value={String(y)}>
                              Year {y}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {errorBox}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-95"
                      size="lg"
                    >
                      {loading ? "Planting your first blossom…" : "Start my journey"}
                      <Heart className="h-4 w-4 fill-current" aria-hidden />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Already have an account? Just tap <span className="font-medium text-foreground">Sign in</span> 💗
                    </p>
                  </motion.form>
                )}

                {mode === "staff" && (
                  <motion.form key="staff" onSubmit={submit} className="space-y-4" {...modeAnim}>
                    <div className="space-y-1.5">
                      <Label htmlFor="staff-email">Staff email</Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="staff-email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 pl-9"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="staff-password">Password</Label>
                      <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="staff-password"
                          type={showPw ? "text" : "password"}
                          autoComplete="current-password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="h-11 pl-9 pr-12"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPw((v) => !v)}
                          aria-label={showPw ? "Hide password" : "Show password"}
                          aria-pressed={showPw}
                          className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        >
                          {showPw ? <EyeOff className="h-4 w-4" aria-hidden /> : <Eye className="h-4 w-4" aria-hidden />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="admin-key">Admin key</Label>
                      <div className="relative">
                        <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                        <Input
                          id="admin-key"
                          type="password"
                          autoComplete="off"
                          placeholder="Your private staff key"
                          value={adminKey}
                          onChange={(e) => setAdminKey(e.target.value)}
                          className="h-11 pl-9"
                          required
                        />
                      </div>
                    </div>

                    {errorBox}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-gradient-to-r from-plum to-primary text-primary-foreground shadow-lg shadow-plum/25 hover:opacity-95"
                      size="lg"
                    >
                      {loading ? "Unlocking the studio…" : "Enter the studio"}
                      <ShieldCheck className="h-4 w-4" aria-hidden />
                    </Button>

                    <button
                      type="button"
                      onClick={() => switchMode("signin")}
                      className="flex w-full items-center justify-center gap-1.5 pt-1 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-full py-2"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                      Back to student sign in
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {mode !== "staff" && (
                <div className="mt-5 flex justify-center border-t border-border/60 pt-4">
                  <button
                    type="button"
                    onClick={() => switchMode("staff")}
                    aria-label="Staff sign in"
                    title="Staff sign in"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground/50 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <Lock className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.section>
      </div>

      <footer className="relative pb-6 text-center text-xs text-muted-foreground">
        <p>
          Mimie&apos;s Study · Made with love for Mimie 💗 · Educational platform for midwifery study
        </p>
      </footer>
    </main>
  );
}
