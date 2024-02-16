import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BranchWhereInput = {
  associationName?: StringNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  img?: StringNullableFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
