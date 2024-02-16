import { Module } from "@nestjs/common";
import { BranchModuleBase } from "./base/branch.module.base";
import { BranchService } from "./branch.service";
import { BranchController } from "./branch.controller";
import { BranchResolver } from "./branch.resolver";

@Module({
  imports: [BranchModuleBase],
  controllers: [BranchController],
  providers: [BranchService, BranchResolver],
  exports: [BranchService],
})
export class BranchModule {}
