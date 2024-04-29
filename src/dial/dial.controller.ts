import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { DialService } from "./dial.service";
import { CreateDialDto } from "./dto/create-dial.dto";
import { UpdateDialDto } from "./dto/update-dial.dto";

@Controller("dial")
export class DialController {
  constructor(private readonly dialService: DialService) {}

  @Post("/voice")
  handleIncomingRequest(@Body() body, @Res() res) {
    const message = "Hello, thank you for calling!";
    console.log(body);
    const voiceResponse = this.dialService.createVoiceResponse(message);

    res.set("Content-Type", "text/xml");
    res.send(voiceResponse);
  }

  @Get()
  findAll() {
    return this.dialService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.dialService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDialDto: UpdateDialDto) {
    return this.dialService.update(+id, updateDialDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.dialService.remove(+id);
  }
}
