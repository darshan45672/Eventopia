import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "title";

export const EventTitle = (record: TEvent): string => {
  return record.title || String(record.id);
};
