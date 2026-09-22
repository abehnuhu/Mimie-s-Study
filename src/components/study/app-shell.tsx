"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/app-store";
import { DynIcon } from "./dyn-icon";
import { SessionRunner } from "./session-runner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Home, GraduationCap, Gamepad2, LineChart, User, Search, Moon, Sun, ArrowLeft,
  Heart, LogOut, Shield, Bookmark, Layers,
} from "lucide-react";
import { XpBar } from "./progress-widgets";

const NAV = [
  { name: "dashboard", label: "Home", icon: Home },
  { name: "curriculum", label: "Learn", icon: GraduationCap },
  { name: "games", label: "Games", icon: Gamepad2 },
  { name: "progress", label: "Progress", icon: LineChart },
  { name: "profile", label: "Profile", icon: User },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, view, go, back, history, bootstrap, dark, toggleDark, setSearchOpen, reset } = useAppStore();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  const navActive = (name: string) => view.name === name ||
    (name === "curriculum" && ["course", "lesson", "quiz", "exam-setup", "review", "revision"].includes(view.name));

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    reset();
    window.location.reload();
  }

  const canBack = history.length > 0 && !["dashboard"].includes(view.name);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1">
        {/* ── desktop sidebar ── */}
        <TooltipProvider delayDuration={250}>
          <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-4 py-5 lg:flex">
            <button
              onClick={() => go({ name: "dashboard" })}
              className="mb-6 flex items-center gap-2.5 px-2 text-left"
              aria-label="Mimie's Study home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-plum text-primary-foreground">
                <Heart className="h-4 w-4 fill-current" aria-hidden />
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-none text-foreground">Mimie&apos;s Study</p>
                <p className="mt-1 text-[11px] text-muted-foreground">Nursing Academy</p>
              </div>
            </button>

            <nav className="space-y-1" aria-label="Main navigation">
              {NAV.map((item) => (
                <button
                  key={item.name}
                  onClick={() => go({ name: item.name } as never)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    navActive(item.name)
                      ? "bg-sidebar-accent text-primary shadow-sm"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground"
                  )}
                  aria-current={navActive(item.name) ? "page" : undefined}
                >
                  <item.icon className="h-4.5 w-4.5 h-[18px] w-[18px]" aria-hidden />
                  {item.label}
                  {item.name === "games" && (
                    <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">15</span>
                  )}
                </button>
              ))}
              <button
                onClick={() => go({ name: "flashcards" })}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  view.name === "flashcards"
                    ? "bg-sidebar-accent text-primary"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground"
                )}
              >
                <Layers className="h-[18px] w-[18px]" aria-hidden />
                Flashcard Cram
              </button>
              <button
                onClick={() => go({ name: "saved" })}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  view.name === "saved"
                    ? "bg-sidebar-accent text-primary"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground"
                )}
              >
                <Bookmark className="h-[18px] w-[18px]" aria-hidden />
                My Saved Things
              </button>
              {user?.role === "ADMIN" && (
                <button
                  onClick={() => go({ name: "admin" })}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    view.name === "admin"
                      ? "bg-sidebar-accent text-primary"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground"
                  )}
                >
                  <Shield className="h-[18px] w-[18px]" aria-hidden />
                  Admin Studio
                </button>
              )}
            </nav>

            <div className="mt-6 px-2">
              {bootstrap && <XpBar xp={bootstrap.xp.total} level={bootstrap.xp.level} />}
            </div>

            <div className="mt-auto space-y-2 pt-4">
              <div className="flex items-center gap-2.5 rounded-xl border border-sidebar-border/60 bg-card/60 px-3 py-2.5">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blossom-soft text-base dark:bg-plum/40">{user?.avatar ?? "🌸"}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{user?.nickname || user?.name}</p>
                  <p className="text-[11px] text-muted-foreground">
                    Year {user?.currentYear} · Sem {user?.currentSemester}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" onClick={() => setSearchOpen(true)} aria-label="Search (Ctrl+K)">
                      <Search className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Search everything · ⌘K</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" onClick={toggleDark} aria-label="Toggle theme">
                      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{dark ? "Light mode" : "Cozy dark mode"}</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" onClick={logout} aria-label="Log out">
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Log out</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </aside>
        </TooltipProvider>

        {/* ── main column ── */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* mobile top bar */}
          <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-border/70 bg-background/85 px-4 py-3 backdrop-blur lg:hidden">
            {canBack ? (
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" onClick={back} aria-label="Go back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-plum text-primary-foreground">
                <Heart className="h-4 w-4 fill-current" aria-hidden />
              </div>
            )}
            <div className="flex-1 text-center">
              <p className="font-display text-base font-semibold text-foreground">Mimie&apos;s Study</p>
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setSearchOpen(true)} aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggleDark} aria-label="Toggle theme">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </header>

          {/* mobile back row for deep views */}
          {canBack && (
            <div className="hidden lg:block">
              <Button variant="ghost" size="sm" className="mx-6 mt-4 gap-1 text-muted-foreground" onClick={back}>
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </div>
          )}

          <main className="min-w-0 flex-1 px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-10 lg:pt-6">
            <SessionRunner />
            {children}
          </main>

          {/* footer */}
          <footer className="mt-auto border-t border-border/60 bg-card/40 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center lg:px-8">
            <p className="font-display text-sm text-foreground">Mimie&apos;s Study</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Made with love for Mimie 💗 · Educational platform for nursing study</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground/80">
              <span className="cursor-default hover:text-primary">Privacy</span>
              <span>·</span>
              <span className="cursor-default hover:text-primary">Sources</span>
              <span>·</span>
              <span className="cursor-default hover:text-primary">About</span>
              {user?.role !== "ADMIN" && (
                <>
                  <span>·</span>
                  <button className="hover:text-primary" onClick={logout} aria-label="Sign out of Mimie's Study">Sign out</button>
                </>
              )}
            </div>
          </footer>

          {/* ── mobile bottom nav ── */}
          <nav
            className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/90 backdrop-blur-lg lg:hidden"
            aria-label="Bottom navigation"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="grid grid-cols-5">
              {NAV.map((item) => {
                const active = navActive(item.name);
                return (
                  <button
                    key={item.name}
                    onClick={() => go({ name: item.name } as never)}
                    className={cn(
                      "group relative flex min-h-[56px] flex-col items-center justify-center gap-1 mx-1 my-1.5 px-1 py-2 text-[11px] font-medium transition-all active:scale-95 motion-reduce:transform-none",
                      active
                        ? "rounded-2xl bg-primary/10 text-primary"
                        : "rounded-2xl text-muted-foreground hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <item.icon
                      key={String(active)}
                      className={cn("h-5 w-5 transition-transform", active ? "nav-bounce scale-110 drop-shadow" : "group-hover:scale-105 motion-reduce:transform-none")}
                      aria-hidden
                    />
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0.5 h-1 w-1 rounded-full bg-primary transition-all duration-300",
                        active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      )}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
