"use client";

import { create } from "zustand";
import type { SessionUser, View, BootstrapData, SessionStep } from "@/lib/types";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

interface AppState {
  user: SessionUser | null;
  authChecked: boolean;
  view: View;
  history: View[];
  bootstrap: BootstrapData | null;
  searchOpen: boolean;
  confetti: ConfettiPiece[];
  dark: boolean;
  /** Deep-linked report-card range (from a shared ?report=… link) — consumed once by the report dialog. */
  openReportRange: { from?: string; to?: string; all?: string } | null;
  /** Active guided session — walks the smart-plan steps one by one like a workout. */
  session: { steps: SessionStep[]; index: number; skipped: number; startedXp: number; startedAt: number } | null;

  setUser: (user: SessionUser | null) => void;
  setAuthChecked: (v: boolean) => void;
  go: (view: View) => void;
  back: () => void;
  setView: (view: View) => void;
  setBootstrap: (data: BootstrapData | null) => void;
  refreshBootstrap: () => Promise<void>;
  setSearchOpen: (v: boolean) => void;
  triggerConfetti: (count?: number) => void;
  clearConfetti: () => void;
  toggleDark: () => void;
  setReportRange: (r: { from?: string; to?: string; all?: string } | null) => void;
  startSession: (steps: SessionStep[], startedXp: number) => void;
  sessionAdvance: (skipped?: boolean) => void;
  sessionExit: () => void;
  reset: () => void;
}

const CONFETTI_COLORS = ["#d4738c", "#c084b8", "#e9c46a", "#a3c9a8", "#8e5572", "#f4d8c4"];

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  authChecked: false,
  view: { name: "dashboard" },
  history: [],
  bootstrap: null,
  searchOpen: false,
  confetti: [],
  dark: false,
  openReportRange: null,
  session: null,

  setUser: (user) => set({ user }),
  setAuthChecked: (v) => set({ authChecked: v }),

  go: (view) => {
    const { view: current, history } = get();
    if (current.name === view.name && view.name !== "quiz" && view.name !== "lesson") {
      set({ view });
      return;
    }
    set({ view, history: [...history, current].slice(-30) });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  },

  back: () => {
    const { history } = get();
    if (history.length === 0) {
      set({ view: { name: "dashboard" } });
      return;
    }
    const prev = history[history.length - 1];
    set({ view: prev, history: history.slice(0, -1) });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  },

  setView: (view) => set({ view }),
  setBootstrap: (data) => set({ bootstrap: data }),

  refreshBootstrap: async () => {
    try {
      const res = await fetch("/api/bootstrap", { cache: "no-store" });
      if (res.status === 401) return;
      const data = await res.json();
      set({ bootstrap: data });
    } catch {
      // silent — bootstrap is refetched on demand
    }
  },

  setSearchOpen: (v) => set({ searchOpen: v }),

  triggerConfetti: (count = 80) => {
    const pieces: ConfettiPiece[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 2.2 + Math.random() * 1.6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    }));
    set({ confetti: pieces });
    setTimeout(() => get().clearConfetti(), 4500);
  },

  clearConfetti: () => set({ confetti: [] }),

  setReportRange: (r) => set({ openReportRange: r }),

  startSession: (steps, startedXp) =>
    set({
      session: { steps, index: 0, skipped: 0, startedXp, startedAt: Date.now() },
    }),

  sessionAdvance: (skipped = false) => {
    const s = get().session;
    if (!s) return;
    set({ session: { ...s, index: s.index + 1, skipped: s.skipped + (skipped ? 1 : 0) } });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  },

  sessionExit: () => set({ session: null }),

  toggleDark: () => {
    const dark = !get().dark;
    set({ dark });
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
    }
  },

  reset: () =>
    set({
      user: null,
      view: { name: "dashboard" },
      history: [],
      bootstrap: null,
      confetti: [],
    }),
}));
