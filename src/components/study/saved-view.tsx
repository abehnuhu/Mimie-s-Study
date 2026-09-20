"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { EmptyState } from "./shared-cards";
import { Bookmark, Trash2, BookOpen, Gem, Layers } from "lucide-react";

interface BookmarkItem {
  id: string;
  itemType: string;
  itemId: string;
  label: string;
  snippet: string | null;
  createdAt: string;
}

export function SavedView() {
  const { go } = useAppStore();
  const [items, setItems] = useState<BookmarkItem[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/bookmarks", { cache: "no-store" });
        const json = await res.json();
        setItems(json.bookmarks ?? []);
      } catch {
        toast("Couldn't load your saved things 💗");
        setItems([]);
      }
    })();
  }, []);

  async function remove(item: BookmarkItem) {
    await fetch(`/api/bookmarks?itemType=${item.itemType}&itemId=${item.itemId}`, { method: "DELETE" }).catch(() => {});
    setItems((list) => (list ?? []).filter((b) => b.id !== item.id));
    toast("Removed 💗");
  }

  if (!items) {
    return (
      <div className="mx-auto max-w-3xl space-y-3" aria-busy="true">
        <Skeleton className="h-10 w-48 rounded-xl" />
        {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-20 rounded-2xl" />)}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <h1 className="font-display text-3xl font-semibold text-foreground">My Saved Things</h1>
        <p className="mt-1 text-sm text-muted-foreground">Your little shelf of lessons and pearls 💗</p>
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={Bookmark}
          title="No saved lessons yet 💗"
          hint="Your first bookmark can live here — tap Save on any lesson."
          action={
            <Button className="rounded-full" onClick={() => go({ name: "curriculum" })}>
              Explore lessons
            </Button>
          }
        />
      ) : (
        <div className="space-y-2.5">
          {items.map((item) => (
            <Card key={item.id} className="card-hover border-border/70">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blossom-soft text-primary dark:bg-plum/40">
                  {item.itemType === "lesson" ? <BookOpen className="h-5 w-5" aria-hidden /> : item.itemType === "pearl" ? <Gem className="h-5 w-5" aria-hidden /> : <Layers className="h-5 w-5" aria-hidden />}
                </div>
                <button
                  className="min-w-0 flex-1 text-left"
                  onClick={() => item.itemType === "lesson" && go({ name: "lesson", id: item.itemId })}
                >
                  <p className="truncate text-sm font-semibold text-foreground">{item.label}</p>
                  {item.snippet && <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{item.snippet}</p>}
                </button>
                <span className="shrink-0 text-[11px] text-muted-foreground">
                  {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </span>
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => remove(item)} aria-label="Remove bookmark">
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
