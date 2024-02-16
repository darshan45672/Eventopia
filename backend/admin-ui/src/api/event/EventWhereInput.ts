import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventRegistrationListRelationFilter } from "../eventRegistration/EventRegistrationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  attendanceCode?: StringNullableFilter;
  branch?: BranchWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  eventRegistrations?: EventRegistrationListRelationFilter;
  eventType?: "Individual" | "Team";
  id?: StringFilter;
  img?: StringNullableFilter;
  registrationEndDate?: DateTimeNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  venue?: StringNullableFilter;
};
