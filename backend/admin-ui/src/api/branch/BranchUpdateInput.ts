import { EventUpdateManyWithoutBranchesInput } from "./EventUpdateManyWithoutBranchesInput";
import { UserUpdateManyWithoutBranchesInput } from "./UserUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  associationName?: string | null;
  events?: EventUpdateManyWithoutBranchesInput;
  img?: string | null;
  name?: string;
  users?: UserUpdateManyWithoutBranchesInput;
};
