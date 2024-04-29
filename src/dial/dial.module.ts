import { Module } from "@nestjs/common";
import { DialService } from "./dial.service";
import { DialController } from "./dial.controller";

@Module({
  controllers: [DialController],
  providers: [DialService],
})
export class DialModule {}
