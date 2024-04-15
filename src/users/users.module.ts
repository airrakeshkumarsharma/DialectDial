import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { AuthModule } from "src/auth/auth.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "./user.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([UserModel]),
  ],
})
export class UsersModule {}
