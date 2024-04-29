import { Injectable } from "@nestjs/common";
import { CreateDialDto } from "./dto/create-dial.dto";
import { UpdateDialDto } from "./dto/update-dial.dto";
import { Twilio, twiml } from "twilio";
import configuration from "src/config/configuration";

@Injectable()
export class DialService {
  private twilioClient: Twilio;

  constructor() {
    this.twilioClient = new Twilio(
      configuration().twilio.accountSid,
      configuration().twilio.authToken,
    );
  }
  createVoiceResponse(message: string) {
    const VoiceResponse = twiml.VoiceResponse;
    const response = new VoiceResponse();
    response.say(message);
    return response.toString();
  }

  findAll() {
    return `This action returns all dial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dial`;
  }

  update(id: number, updateDialDto: UpdateDialDto) {
    return `This action updates a #${id} dial`;
  }

  remove(id: number) {
    return `This action removes a #${id} dial`;
  }
}
