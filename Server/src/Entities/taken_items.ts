import { Entity, Column, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { users } from "./users";
import "reflect-metadata";

@Entity()
export class taken_items extends BaseEntity {
  @PrimaryColumn()
  "item_name": string="";

  @Column({ nullable: true })
  item_category: string;

  @ManyToOne(() => users, (users) => users.taken_items)
  users: users ;

  @Column({ nullable: true})
  "date": Date = new Date();

  @Column({ nullable: true })
  "amount": number;

  @Column({ nullable: true })
  "status": string;

  @Column()
  "comments": string;

  @Column()
  "QA": string;
}
