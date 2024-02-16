import { EventWhereInput } from "./EventWhereInput";
import { EventOrderByInput } from "./EventOrderByInput";

export type EventFindManyArgs = {
  where?: EventWhereInput;
  orderBy?: Array<EventOrderByInput>;
  skip?: number;
  take?: number;
};
