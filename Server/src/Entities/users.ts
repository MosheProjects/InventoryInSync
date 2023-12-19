import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { taken_items } from "./taken_items";
import "reflect-metadata";


@Entity()
export class users extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @Column()
  phone_number: string;

  @Column()
  group: string;

  @OneToMany(() => taken_items, (taken_items) => taken_items.users)
  taken_items: taken_items[];
}
