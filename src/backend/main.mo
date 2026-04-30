import List "mo:core/List";
import Types "types/common";
import CollegesMixin "mixins/colleges-api";

actor {
  let colleges = List.empty<Types.CollegeRecord>();

  include CollegesMixin(colleges);
};
