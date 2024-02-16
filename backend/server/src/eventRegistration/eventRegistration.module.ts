import { Module } from "@nestjs/common";
import { EventRegistrationModuleBase } from "./base/eventRegistration.module.base";
import { EventRegistrationService } from "./eventRegistration.service";
import { EventRegistrationController } from "./eventRegistration.controller";
import { EventRegistrationResolver } from "./eventRegistration.resolver";

@Module({
  imports: [EventRegistrationModuleBase],
  controllers: [EventRegistrationController],
  providers: [EventRegistrationService, EventRegistrationResolver],
  exports: [EventRegistrationService],
})
export class EventRegistrationModule {}
