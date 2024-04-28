import { HttpException } from "@nestjs/common";

export class LoginError extends HttpException {
  constructor() {
    super("Invalid email or password", 401);
  }
}
