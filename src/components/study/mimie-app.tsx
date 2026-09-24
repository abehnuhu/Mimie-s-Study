"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/app-store";
import { LoginView } from "./login-view";
import { AppShell } from "./app-shell";
import { DashboardView } from "./dashboard-view";
import { CurriculumView } from "./curriculum-view";
import { CourseView } from "./course-view";
import { RevisionSheetView } from "./revision-sheet-view";
import { LessonView } from "./lesson-view";
import { QuizView } from "./quiz-view";
import { ExamSetupView } from "./exam-setup-view";
import { ReviewView } from "./review-view";
import { FlashcardsView } from "./flashcards-view";
import { GamesView } from "./games-view";
import { GamePlayer } from "./games/game-player";
import { ProgressView } from "./progress-view";
import { ProfileView } from "./profile-view";
import { SavedView } from "./saved-view";
import { AdminView } from "./admin/admin-view";
import { BackgroundMusic } from "./background-music";
import { AssistantWidget } from "./assistant-widget";
import { SearchPalette } from "./search-palette";
import { ConfettiLayer } from "./decor";
import { Skeleton } from "@/components/ui/skeleton";
import type { SessionUser } from "@/lib/types";

export function MimieApp() {
  const { user, authChecked, setAuthChecked, setUser, view, refreshBootstrap } = useAppStore();

  // restore session on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();
        if (data.user) {
          setUser(data.user as SessionUser);
          refreshBootstrap();
        }
      } catch {
        // offline — stay on login
      } finally {
        setAuthChecked(true);
      }
    })();
  }, [setUser, setAuthChecked, refreshBootstrap]);

  // persist theme preference
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("mimie-theme") : null;
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      useAppStore.setState({ dark: true });
    }
  }, []);

  // deep link: ?report=all | ?report=YYYY-MM-DD|YYYY-MM-DD → open the report card on Progress
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const report = params.get("report");
    if (!report) return;
    params.delete("report");
    const qs = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}`);
    const range = report === "all"
      ? { all: "1" }
      : (() => {
          const [from, to] = report.split("|");
          return /^\d{4}-\d{2}-\d{2}$/.test(from ?? "") && /^\d{4}-\d{2}-\d{2}$/.test(to ?? "")
            ? { from, to }
            : null;
        })();
    if (!range) return;
    useAppStore.setState({ openReportRange: range, view: { name: "progress" } });
  }, []);

  if (!authChecked) {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="space-y-4 text-center">
            <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl bg-gradient-to-br from-primary to-plum" />
            <p className="font-display text-lg text-muted-foreground">Opening Mimie&apos;s Study…</p>
          </div>
        </div>
        <BackgroundMusic />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <LoginView
          onLogin={(u) => {
            setUser(u);
            refreshBootstrap();
          }}
        />
        <BackgroundMusic />
      </>
    );
  }

  return (
    <AppShell>
      <ViewRouter />
      <SearchPalette />
      <ConfettiLayer />
      <BackgroundMusic />
      <AssistantWidget />
    </AppShell>
  );
}

function ViewRouter() {
  const view = useAppStore((s) => s.view);
  switch (view.name) {
    case "dashboard":
      return <DashboardView />;
    case "curriculum":
      return <CurriculumView />;
    case "course":
      return <CourseView slug={view.slug} />;
    case "revision":
      return <RevisionSheetView slug={view.slug} />;
    case "lesson":
      return <LessonView id={view.id} autoplay={view.autoplay} />;
    case "quiz":
      return <QuizView config={view.config} />;
    case "exam-setup":
      // key forces a fresh mount when a retry config arrives from history
      return (
        <ExamSetupView
          key={view.retry ? `retry-${view.retry.attemptId ?? view.retry.createdAt ?? "x"}` : view.preset ? `preset-${view.preset.mode ?? "x"}` : "exam-setup"}
          initialTopic={view.topic}
          initialTab={view.tab}
          initialRetry={view.retry}
          initialPreset={view.preset}
        />
      );
    case "review":
      return <ReviewView />;
    case "flashcards":
      return <FlashcardsView courseSlug={view.courseSlug} />;
    case "games":
      return <GamesView />;
    case "game":
      return <GamePlayer slug={view.slug} />;
    case "progress":
      return <ProgressView />;
    case "profile":
      return <ProfileView />;
    case "saved":
      return <SavedView />;
    case "admin":
      return <AdminView />;
    default:
      return <DashboardView />;
  }
}

export function LoadingView({ lines = 3 }: { lines?: number }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      <Skeleton className="h-9 w-2/3 rounded-xl" />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-24 rounded-2xl" />
      ))}
    </div>
  );
}
