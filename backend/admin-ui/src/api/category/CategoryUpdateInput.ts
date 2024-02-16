import { EventUpdateManyWithoutCategoriesInput } from "./EventUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  events?: EventUpdateManyWithoutCategoriesInput;
  name?: string;
};
