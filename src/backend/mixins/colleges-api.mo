import List "mo:core/List";
import Types "../types/common";
import CollegeLib "../lib/colleges";

mixin (colleges : List.List<Types.CollegeRecord>) {

  /// Search and paginate colleges with optional filters
  public query func getColleges(filter : Types.SearchFilter) : async Types.SearchResult {
    CollegeLib.search(colleges, filter)
  };

  /// Get full details for a single college
  public query func getCollege(id : Types.CollegeId) : async ?Types.CollegeRecord {
    CollegeLib.getById(colleges, id)
  };

  /// Fetch multiple colleges by id for side-by-side comparison
  public query func getCollegesById(ids : [Types.CollegeId]) : async [Types.CollegeRecord] {
    CollegeLib.getByIds(colleges, ids)
  };

  /// Predict eligible colleges based on exam type and rank
  public query func predictColleges(predictor : Types.PredictorQuery) : async [Types.CollegeRecord] {
    CollegeLib.predict(colleges, predictor)
  };

  /// Return all distinct locations for filter dropdowns
  public query func getAllLocations() : async [Text] {
    CollegeLib.allLocations(colleges)
  };

  /// Seed the canister with 20 Indian college records (idempotent — skips if data exists)
  public func initializeData() : async () {
    if (colleges.size() == 0) {
      CollegeLib.initSeedData(colleges);
    };
  };
};
