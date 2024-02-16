import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventRegistrationServiceBase } from "./base/eventRegistration.service.base";

@Injectable()
export class EventRegistrationService extends EventRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
