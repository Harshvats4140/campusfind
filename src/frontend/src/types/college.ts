// Types that match the generated backend.ts interface exactly
export type {
  CourseRecord,
  CutoffRecord,
  CollegeRecord,
  SearchFilter,
  SearchResult,
  PredictorQuery,
} from "../backend";

export type FeesRange = "all" | "under5" | "5to10" | "10to15" | "above15";

export interface FilterState {
  nameQuery: string;
  location: string;
  feesRange: FeesRange;
}
