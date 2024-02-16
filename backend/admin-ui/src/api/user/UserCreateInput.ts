import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { EventRegistrationCreateNestedManyWithoutUsersInput } from "./EventRegistrationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  branch?: BranchWhereUniqueInput | null;
  email: string;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  gender?: Array<"Male" | "Female">;
  lastName?: string | null;
  password: string;
  profilePath?: string | null;
  roles: InputJsonValue;
  username: string;
  usn: string;
};
