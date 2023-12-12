import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { users } from "./users";
import "reflect-metadata";

@Entity()
export class taken_items extends BaseEntity {

  @PrimaryGeneratedColumn()
  "item_name": string;

  @Column({nullable: true})
  item_category: string;

  @ManyToOne(() => users, (users) => users.taken_items)
  users: users=new users();

  @Column({nullable: true})
  "date": Date=new Date;

  @Column({nullable: true})
  "amount": number;

  @Column({nullable: true})
  "status": string;

  @Column()
  "comments": string;

  @Column()
  "QA": string;
}
