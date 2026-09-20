"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/app-store";
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from "@/components/ui/command";
import { BookOpen, HelpCircle, Layers, Gamepad2 } from "lucide-react";

interface SearchResults {
  lessons: { id: string; title: string; description: string | null; course: string; courseSlug: string; durationMin: number }[];
  questions: { id: string; stem: string; topic: string; lessonId: string | null }[];
  flashcards: { id: string; front: string; back: string; topic: string; lessonId: string | null }[];
  games: { slug: string; title: string; description: string | null }[];
}

const EMPTY: SearchResults = { lessons: [], questions: [], flashcards: [], games: [] };

export function SearchPalette() {
  const { searchOpen, setSearchOpen, go } = useAppStore();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults>(EMPTY);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchOpen) {
      setQuery("");
      setResults(EMPTY);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults(EMPTY);
      return;
    }
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
        const json = await res.json();
        setResults(json.results ?? EMPTY);
      } catch {
        setResults(EMPTY);
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => clearTimeout(t);
  }, [query]);

  const total = results.lessons.length + results.questions.length + results.flashcards.length + results.games.length;

  function navigate(view: Parameters<typeof go>[0]) {
    setSearchOpen(false);
    go(view);
  }

  return (
    <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
      <CommandInput
        placeholder="Search lessons, questions, flashcards… e.g. postpartum haemorrhage"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {loading && <p className="py-4 text-center text-xs text-muted-foreground">Searching…</p>}
        {!loading && query.trim().length >= 2 && total === 0 && (
          <CommandEmpty>Nothing found for “{query}” — try another word 💗</CommandEmpty>
        )}
        {query.trim().length < 2 && (
          <p className="py-6 text-center text-xs text-muted-foreground">
            Type at least two letters — try “labour”, “infection”, “newborn”…
          </p>
        )}

        {results.lessons.length > 0 && (
          <CommandGroup heading="Lessons">
            {results.lessons.map((l) => (
              <CommandItem
                key={l.id}
                value={`lesson ${l.title} ${l.course}`}
                onSelect={() => navigate({ name: "lesson", id: l.id })}
              >
                <BookOpen className="mr-2 h-4 w-4 text-primary" aria-hidden />
                <span className="flex-1 truncate">{l.title}</span>
                <span className="ml-2 shrink-0 text-[11px] text-muted-foreground">{l.course}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {results.questions.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Questions">
              {results.questions.map((q) => (
                <CommandItem
                  key={q.id}
                  value={`question ${q.stem} ${q.topic}`}
                  onSelect={() => q.lessonId && navigate({ name: "lesson", id: q.lessonId })}
                >
                  <HelpCircle className="mr-2 h-4 w-4 text-primary" aria-hidden />
                  <span className="flex-1 truncate">{q.stem}</span>
                  <span className="ml-2 shrink-0 text-[11px] text-muted-foreground">{q.topic}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {results.flashcards.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Flashcards">
              {results.flashcards.map((f) => (
                <CommandItem
                  key={f.id}
                  value={`flashcard ${f.front} ${f.topic}`}
                  onSelect={() => f.lessonId && navigate({ name: "lesson", id: f.lessonId })}
                >
                  <Layers className="mr-2 h-4 w-4 text-primary" aria-hidden />
                  <span className="flex-1 truncate">{f.front}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {results.games.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Games">
              {results.games.map((g) => (
                <CommandItem
                  key={g.slug}
                  value={`game ${g.title}`}
                  onSelect={() => navigate({ name: "game", slug: g.slug })}
                >
                  <Gamepad2 className="mr-2 h-4 w-4 text-primary" aria-hidden />
                  <span className="flex-1 truncate">{g.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
}
