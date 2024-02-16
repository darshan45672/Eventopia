import { BranchWhereInput } from "./BranchWhereInput";
import { BranchOrderByInput } from "./BranchOrderByInput";

export type BranchFindManyArgs = {
  where?: BranchWhereInput;
  orderBy?: Array<BranchOrderByInput>;
  skip?: number;
  take?: number;
};
