import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'mongo',
      port: 27017,
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      synchronize: true, // NOT FOR PRODUCTION
      autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot({
      name: 'mariadb',
      type: 'mariadb',
      host: 'mariadb',
      port: 3306,
      username: 'root',
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
