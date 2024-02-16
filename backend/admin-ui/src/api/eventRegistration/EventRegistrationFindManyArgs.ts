import { EventRegistrationWhereInput } from "./EventRegistrationWhereInput";
import { EventRegistrationOrderByInput } from "./EventRegistrationOrderByInput";

export type EventRegistrationFindManyArgs = {
  where?: EventRegistrationWhereInput;
  orderBy?: Array<EventRegistrationOrderByInput>;
  skip?: number;
  take?: number;
};
