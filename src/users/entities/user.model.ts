import { Column, Model, Table, Unique } from "sequelize-typescript";

@Table({ timestamps: true })
export class UserModel extends Model {
  @Unique
  @Column
  email: string;

  @Column
  password: string;

  @Column
  lastLogin: Date;
}
