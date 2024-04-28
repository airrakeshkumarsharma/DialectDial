import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
