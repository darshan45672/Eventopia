import { EventRegistration as TEventRegistration } from "../api/eventRegistration/EventRegistration";

export const EVENTREGISTRATION_TITLE_FIELD = "id";

export const EventRegistrationTitle = (record: TEventRegistration): string => {
  return record.id || String(record.id);
};
