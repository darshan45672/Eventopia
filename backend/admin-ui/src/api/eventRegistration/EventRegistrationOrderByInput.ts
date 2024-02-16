import { SortOrder } from "../../util/SortOrder";

export type EventRegistrationOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  isAttended?: SortOrder;
  teamMembers?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
