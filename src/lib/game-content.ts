// Re-export pure game data (no server deps) for client components.
export {
  infectionSortItems,
  medicationMatchPairs,
  newbornFindings,
  labourTimeline,
  fetalPositionScenarios,
  clinicalPrioritySets,
  detectiveCases,
  memoryMatchPairs,
  anatomyLabels,
} from "../../prisma/seed-data/games-content";
export type {
  SortGameItem,
  MatchPair,
  TimelineEvent,
  FetalPositionScenario,
  PrioritySet,
  DetectiveCase,
  LabelItem,
} from "../../prisma/seed-data/types";
