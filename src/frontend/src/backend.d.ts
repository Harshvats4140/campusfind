import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SearchResult {
    totalCount: bigint;
    colleges: Array<CollegeRecord>;
}
export interface PredictorQuery {
    rank: bigint;
    examType: string;
}
export type CollegeId = string;
export interface CutoffRecord {
    rank: bigint;
    category: string;
    examType: string;
}
export interface SearchFilter {
    minFees?: bigint;
    page: bigint;
    pageSize: bigint;
    nameQuery?: string;
    maxFees?: bigint;
    location?: string;
}
export interface CourseRecord {
    durationYears: bigint;
    name: string;
    seats: bigint;
}
export interface CollegeRecord {
    id: CollegeId;
    courses: Array<CourseRecord>;
    annualFees: bigint;
    placementPercent: bigint;
    name: string;
    totalStudents: bigint;
    description: string;
    avgPackageLPA: number;
    accreditation: string;
    topRecruiters: Array<string>;
    establishedYear: bigint;
    state: string;
    rating: number;
    location: string;
    cutoffs: Array<CutoffRecord>;
}
export interface backendInterface {
    getAllLocations(): Promise<Array<string>>;
    getCollege(id: CollegeId): Promise<CollegeRecord | null>;
    getColleges(filter: SearchFilter): Promise<SearchResult>;
    getCollegesById(ids: Array<CollegeId>): Promise<Array<CollegeRecord>>;
    initializeData(): Promise<void>;
    predictColleges(predictor: PredictorQuery): Promise<Array<CollegeRecord>>;
}
