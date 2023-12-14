import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
} from "typeorm";
import { Entity, Column, BaseEntity } from "typeorm";



@Entity()
export class cables extends BaseEntity {
  @PrimaryColumn()
  name: string;
  @Column()
  order_id: string;
  @Column()
  related_vehicle: number;
  @Column()
  comments: string;
  @Column({ default: 1 })
  quantity: number;
  @Column()
  quantity: string;
}
