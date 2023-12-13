import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity()
export class cables extends BaseEntity {
  @PrimaryColumn()
  name: string;
  @Column(uuidv4)
  id: number;
  @Column()
  related_vehicle: number;
  @Column()
  comments: string;
  @Column()
  order_id: string;
  @Column({default: 1 })
  quantity: number;
}
