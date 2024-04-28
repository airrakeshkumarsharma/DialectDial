import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { UserModel } from "./entities/user.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

  async findAll(): Promise<UserModel[]> {
    return this.userModel.findAll();
  }

  create(createUserDto: any) {
    return this.userModel.create(createUserDto);
  }

  findOne(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: any) {
    return this.userModel.update(updateUserDto, { where: { id } });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
