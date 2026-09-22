// Re-export pure game data (no server deps) for client components.
export {
  infectionSortItems,
  medicationMatchPairs,
  newbornFindings,
  nursingProcessTimeline,
  gcsScenarios,
  clinicalPrioritySets,
  detectiveCases,
  memoryMatchPairs,
  anatomyLabels,
} from "../../prisma/seed-data/games-content";
export type {
  SortGameItem,
  MatchPair,
  TimelineEvent,
  GcsScenario,
  PrioritySet,
  DetectiveCase,
  LabelItem,
} from "../../prisma/seed-data/types";
