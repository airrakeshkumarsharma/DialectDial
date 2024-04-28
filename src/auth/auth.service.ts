import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LoginError } from "./errors/authorizationError";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = (await this.usersService.findOne(email)).dataValues;
    const isValidPassword = await bcrypt.compare(pass, user.password);
    console.log(isValidPassword);
    if (user && isValidPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = await this.validateUser(user.email, user.password);
    if (!payload) {
      throw new LoginError();
    }
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async create(createAuthDto: CreateAuthDto) {
    const hashedPassword = await this.hashPassword(createAuthDto.password);
    const user = await this.usersService.create({
      ...createAuthDto,
      password: hashedPassword,
    });
    return {
      message: "User has been created successfully",
      user,
    };
  }

  findAll() {
    return this.usersService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
