import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/users.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    UsersModule,
    ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`,
    // load: [configuration],
  }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
