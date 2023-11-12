import {Entity , PrimaryGeneratedColumn , Column, BaseEntity, OneToMany, ManyToOne } from "typeorm"
import { users } from "./users";
import 'reflect-metadata'



@Entity()
export class taken_items extends BaseEntity{
    @PrimaryGeneratedColumn()
    "item_name":string;

    @OneToMany(() => users, users => users.taken_items)
  users: users;

  @Column()
    "date":Date;

    @Column()
   "amount":number

   @Column()
    "status" : string

    @Column()
    "comments": string
    
    @Column()
    "QA":string

}