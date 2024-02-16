import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationUpdateManyWithoutUsersInput } from "./EventRegistrationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  branch?: BranchWhereUniqueInput | null;
  email?: string;
  eventRegistrations?: EventRegistrationUpdateManyWithoutUsersInput;
  firstName?: string | null;
  gender?: Array<"Male" | "Female">;
  lastName?: string | null;
  password?: string;
  profilePath?: string | null;
  roles?: InputJsonValue;
  username?: string;
  usn?: string;
};
