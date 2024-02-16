import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
