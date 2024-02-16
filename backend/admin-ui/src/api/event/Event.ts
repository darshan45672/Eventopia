import { Branch } from "../branch/Branch";
import { Category } from "../category/Category";
import { EventRegistration } from "../eventRegistration/EventRegistration";

export type Event = {
  attendanceCode: string | null;
  branch?: Branch;
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  eventRegistrations?: Array<EventRegistration>;
  eventType?: "Individual" | "Team" | null;
  id: string;
  img: string | null;
  registrationEndDate: Date | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
  venue: string | null;
};
