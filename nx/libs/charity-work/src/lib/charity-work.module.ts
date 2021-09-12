import { Module } from '@nestjs/common';
import {VerificationModule} from "@nx/verification";
import {BudgetModule} from "@nx/budget";

@Module({
  imports: [VerificationModule, BudgetModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class CharityWorkModule {}
