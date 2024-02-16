import { Event } from "../event/Event";

export type Category = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string;
  updatedAt: Date;
};
