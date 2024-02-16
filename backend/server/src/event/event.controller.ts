import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventService } from "./event.service";
import { EventControllerBase } from "./base/event.controller.base";

@swagger.ApiTags("events")
@common.Controller("events")
export class EventController extends EventControllerBase {
  constructor(
    protected readonly service: EventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
