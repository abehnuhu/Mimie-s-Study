"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity, AlertTriangle, Ambulance, Baby, BookOpen, Brain, Clipboard, Compass, FlaskConical,
  Footprints, Flower2, Globe, GraduationCap, Grid2x2, Heart, HeartPulse, ListOrdered, Microscope, Pill,
  Salad, Scan, Search, Shield, Sparkles, Stethoscope, Siren, Syringe, Tag, Target, TestTube,
  Trophy, Users, Zap, Star, Moon, Sun, Lock, Flame, BrainCircuit, NotebookPen, Bookmark,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity, AlertTriangle, Ambulance, Baby, BookOpen, Brain, Clipboard, Compass, FlaskConical,
  Footprints, Flower2, Globe, GraduationCap, Grid2x2, Heart, HeartPulse, ListOrdered, Microscope, Pill,
  Salad, Scan, Search, Shield, Sparkles, Stethoscope, Siren, Syringe, Tag, Target, TestTube,
  Trophy, Users, Zap, Star, Moon, Sun, Lock, Flame, BrainCircuit, NotebookPen, Bookmark,
};

export function DynIcon({ name, className }: { name?: string | null; className?: string }) {
  const Icon = (name && ICONS[name]) || Sparkles;
  return <Icon className={className ?? "h-5 w-5"} aria-hidden />;
}

export const difficultyStyle: Record<string, string> = {
  Easy: "bg-sage/60 text-accent-foreground border-sage",
  Moderate: "bg-lav text-secondary-foreground border-lav",
  Hard: "bg-blossom-soft text-primary border-blossom/40",
  "Clinical Reasoning": "bg-plum/15 text-plum dark:text-lav border-plum/30",
};

export const sourceStatusMeta: Record<string, { label: string; className: string }> = {
  CONFIRMED_GCU: { label: "GCU-Confirmed", className: "bg-sage/70 text-accent-foreground" },
  GCU_ALIGNED: { label: "GCU-Aligned", className: "bg-lav text-secondary-foreground" },
  PROPOSED: { label: "Proposed Sequence", className: "bg-muted text-muted-foreground" },
};
