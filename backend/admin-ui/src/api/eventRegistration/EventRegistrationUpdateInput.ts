import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventRegistrationUpdateInput = {
  event?: EventWhereUniqueInput;
  feedback?: string | null;
  isAttended?: boolean | null;
  teamMembers?: string | null;
  user?: UserWhereUniqueInput;
};
