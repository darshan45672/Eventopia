import { Event } from "../event/Event";
import { User } from "../user/User";

export type EventRegistration = {
  createdAt: Date;
  event?: Event;
  feedback: string | null;
  id: string;
  isAttended: boolean | null;
  teamMembers: string | null;
  updatedAt: Date;
  user?: User;
};
