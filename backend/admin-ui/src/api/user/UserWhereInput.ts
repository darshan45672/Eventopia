import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { EventRegistrationListRelationFilter } from "../eventRegistration/EventRegistrationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  branch?: BranchWhereUniqueInput;
  email?: StringFilter;
  eventRegistrations?: EventRegistrationListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profilePath?: StringNullableFilter;
  username?: StringFilter;
  usn?: StringFilter;
};
