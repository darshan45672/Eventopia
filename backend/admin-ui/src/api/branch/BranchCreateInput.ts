import { EventCreateNestedManyWithoutBranchesInput } from "./EventCreateNestedManyWithoutBranchesInput";
import { UserCreateNestedManyWithoutBranchesInput } from "./UserCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  associationName?: string | null;
  events?: EventCreateNestedManyWithoutBranchesInput;
  img?: string | null;
  name: string;
  users?: UserCreateNestedManyWithoutBranchesInput;
};
