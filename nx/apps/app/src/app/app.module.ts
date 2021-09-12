import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsModule} from "@nx/cats";
import {ClientsModule} from "@nx/clients";
import {CharityWorkModule} from "@nx/charity-work";
import {AdoptionModule} from "@nx/adoption";

@Module({
  imports: [CatsModule, ClientsModule, CharityWorkModule, AdoptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
