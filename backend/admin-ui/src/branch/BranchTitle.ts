import { Branch as TBranch } from "../api/branch/Branch";

export const BRANCH_TITLE_FIELD = "associationName";

export const BranchTitle = (record: TBranch): string => {
  return record.associationName || String(record.id);
};
