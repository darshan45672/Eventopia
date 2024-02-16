import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EventRegistrationResolverBase } from "./base/eventRegistration.resolver.base";
import { EventRegistration } from "./base/EventRegistration";
import { EventRegistrationService } from "./eventRegistration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventRegistration)
export class EventRegistrationResolver extends EventRegistrationResolverBase {
  constructor(
    protected readonly service: EventRegistrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
