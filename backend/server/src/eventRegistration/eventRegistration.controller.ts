import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventRegistrationService } from "./eventRegistration.service";
import { EventRegistrationControllerBase } from "./base/eventRegistration.controller.base";

@swagger.ApiTags("eventRegistrations")
@common.Controller("eventRegistrations")
export class EventRegistrationController extends EventRegistrationControllerBase {
  constructor(
    protected readonly service: EventRegistrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
