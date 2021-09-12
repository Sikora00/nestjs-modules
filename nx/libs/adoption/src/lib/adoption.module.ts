import { Module } from '@nestjs/common';
import {VerificationModule} from "@nx/verification";

@Module({
  imports: [VerificationModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AdoptionModule {}
