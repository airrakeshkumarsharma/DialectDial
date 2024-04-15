import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "./users/user.model";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SequelizeModule.forRoot({
      uri: configuration().database.host,
      models: [UserModel],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
