import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventUpdateInput } from "./EventUpdateInput";

export type UpdateEventArgs = {
  where: EventWhereUniqueInput;
  data: EventUpdateInput;
};
