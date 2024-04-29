import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "./users/entities/user.model";
import { DialModule } from "./dial/dial.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DialModule,
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
      synchronize: true, // Add this line to automatically create tables in the database
      models: [UserModel],
      logging: console.log,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // You should ideally have this set to true in production for better security
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
