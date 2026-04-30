module {
  public type CollegeId = Text;
  public type Timestamp = Int;

  public type CourseRecord = {
    name : Text;
    durationYears : Nat;
    seats : Nat;
  };

  public type CutoffRecord = {
    examType : Text;
    rank : Nat;
    category : Text;
  };

  public type ReviewRecord = {
    reviewer : Text;
    rating : Nat;
    text : Text;
    year : Nat;
  };

  public type CollegeRecord = {
    id : CollegeId;
    name : Text;
    location : Text;
    state : Text;
    annualFees : Nat;
    placementPercent : Nat;
    rating : Float;
    courses : [CourseRecord];
    topRecruiters : [Text];
    avgPackageLPA : Float;
    establishedYear : Nat;
    totalStudents : Nat;
    accreditation : Text;
    description : Text;
    cutoffs : [CutoffRecord];
  };

  public type SearchFilter = {
    nameQuery : ?Text;
    location : ?Text;
    minFees : ?Nat;
    maxFees : ?Nat;
    page : Nat;
    pageSize : Nat;
  };

  public type SearchResult = {
    colleges : [CollegeRecord];
    totalCount : Nat;
  };

  public type PredictorQuery = {
    examType : Text;
    rank : Nat;
  };
};
