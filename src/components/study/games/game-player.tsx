"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/app-store";
import { SortGame } from "./sort-game";
import { AnatomyLabelGame } from "./anatomy-label-game";
import { GcsChallengeGame } from "./gcs-challenge-game";
import { TimelineGame } from "./timeline-game";
import { PriorityGame } from "./priority-game";
import { MedicationMatchGame } from "./medication-match-game";
import { MemoryMatchGame } from "./memory-match-game";
import { SixtySecondGame } from "./sixty-second-game";
import { DetectiveGame } from "./detective-game";
import { PictureMemoryGame } from "./picture-memory-game";
import { DiagramDashGame } from "./diagram-dash-game";
import { BubblePopGame } from "./bubble-pop-game";
import { WardWatchGame } from "./ward-watch-game";
import { WordBloomGame } from "./word-bloom-game";
import { sortPhotoFor, newbornPhotoFor } from "./game-images";
import { infectionSortItems, newbornFindings } from "@/lib/game-content";
import { EmptyState } from "../shared-cards";
import { Gamepad2 } from "lucide-react";

const GAME_TITLES: Record<string, string> = {
  "anatomy-label": "Anatomy Label Challenge",
  "gcs-challenge": "GCS Challenge",
  "nursing-process-timeline": "Nursing Process Timeline",
  "clinical-priority": "Clinical Priority",
  "infection-sort": "Infection Control Sort",
  "medication-match": "Medication Match",
  "newborn-challenge": "Newborn Challenge",
  "sixty-second": "60-Second Recall",
  "case-detective": "Case Detective",
  "memory-match": "Memory Match",
  "picture-memory": "Picture Memory",
  "diagram-dash": "Diagram Dash",
  "bubble-pop": "Bubble Pop",
  "ward-watch": "Ward Watch",
  "word-bloom": "Word Bloom",
};

export function GamePlayer({ slug }: { slug: string }) {
  // tell Ask-Mimie which game she's playing
  const setAssistantHint = useAppStore((s) => s.setAssistantHint);
  useEffect(() => {
    setAssistantHint(`Playing “${GAME_TITLES[slug] ?? slug.replace(/-/g, " ")}”`);
    return () => setAssistantHint(null);
  }, [slug, setAssistantHint]);

  switch (slug) {
    case "anatomy-label":
      return <AnatomyLabelGame />;
    case "gcs-challenge":
      return <GcsChallengeGame />;
    case "nursing-process-timeline":
      return <TimelineGame />;
    case "clinical-priority":
      return <PriorityGame />;
    case "infection-sort":
      return (
        <SortGame
          slug="infection-sort"
          title="Infection Control Sort"
          description="Sort each practice into safe, unsafe, or needs further action."
          icon="Shield"
          items={infectionSortItems.map((it) => ({ ...it, image: sortPhotoFor(it.text) }))}
          bins={[
            { key: "safe", label: "Safe practice", hint: "Breaks the chain", className: "" },
            { key: "unsafe", label: "Unsafe", hint: "Spreads infection", className: "" },
            { key: "action", label: "Needs action", hint: "Fixable risk", className: "" },
          ]}
        />
      );
    case "medication-match":
      return <MedicationMatchGame />;
    case "newborn-challenge":
      return (
        <SortGame
          slug="newborn-challenge"
          title="Newborn Challenge"
          description="Normal, concerning, or danger — sort what you see."
          icon="Baby"
          items={newbornFindings.map((it) => ({ ...it, image: newbornPhotoFor(it.text) }))}
          bins={[
            { key: "normal", label: "Normal finding", hint: "Expected", className: "" },
            { key: "concern", label: "Concerning", hint: "Watch closely", className: "" },
            { key: "danger", label: "Danger sign", hint: "Act now", className: "" },
          ]}
        />
      );
    case "sixty-second":
      return <SixtySecondGame />;
    case "case-detective":
      return <DetectiveGame />;
    case "memory-match":
      return <MemoryMatchGame />;
    case "picture-memory":
      return <PictureMemoryGame />;
    case "diagram-dash":
      return <DiagramDashGame />;
    case "bubble-pop":
      return <BubblePopGame />;
    case "ward-watch":
      return <WardWatchGame />;
    case "word-bloom":
      return <WordBloomGame />;
    default:
      return (
        <EmptyState
          icon={Gamepad2}
          title="This game isn't available yet."
          hint="It's being prepared — try another one 💗"
        />
      );
  }
}
