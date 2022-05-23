import { HttpModule } from '@nestjs/axios';
import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JsonApiModule } from 'json-api-nestjs';
import { AccountableController } from './account.controller';

import { Account } from './models/account.model';
import { Country } from './models/country.model';
import { Customer } from './models/customer.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, Country, Customer], 'mariadb'),
    HttpModule,
    JsonApiModule.forRoot({
      globalPrefix: 'api',
      // swagger: {
      //   apiHost: 'http://localhost:3000',
      //   version: '3.1.0',
      //   prefix: 'swagger',
      // },
      connectionName: 'mariadb',
      imports: [],
      providers: [Logger],
      controllers: [AccountableController],
      entities: [Account, Country, Customer],
    }),
  ],
  controllers: [],
})
export class AccountModule {}
