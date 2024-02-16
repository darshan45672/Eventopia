import { Module } from "@nestjs/common";
import { EventModuleBase } from "./base/event.module.base";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { EventResolver } from "./event.resolver";

@Module({
  imports: [EventModuleBase],
  controllers: [EventController],
  providers: [EventService, EventResolver],
  exports: [EventService],
})
export class EventModule {}
