import { EventWhereInput } from "./EventWhereInput";

export type EventListRelationFilter = {
  every?: EventWhereInput;
  some?: EventWhereInput;
  none?: EventWhereInput;
};
