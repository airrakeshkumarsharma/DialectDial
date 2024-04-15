import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column({ length: 500 })
  email: string;

  @Column()
  password: string;

  @Column("timestamp with time zone")
  lastLogin: Date;
}
