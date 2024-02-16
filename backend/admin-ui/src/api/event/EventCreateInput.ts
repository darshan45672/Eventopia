import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { EventRegistrationCreateNestedManyWithoutEventsInput } from "./EventRegistrationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  attendanceCode?: string | null;
  branch: BranchWhereUniqueInput;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  endDate?: Date | null;
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutEventsInput;
  eventType?: "Individual" | "Team" | null;
  img?: string | null;
  registrationEndDate?: Date | null;
  startDate?: Date | null;
  title?: string | null;
  venue?: string | null;
};
