import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventRegistrationWhereInput = {
  event?: EventWhereUniqueInput;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  isAttended?: BooleanNullableFilter;
  teamMembers?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
