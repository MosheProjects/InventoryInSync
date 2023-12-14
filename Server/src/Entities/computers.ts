import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity()
export class computers extends BaseEntity {
  @PrimaryColumn()
  name: string;
  @Column()
  vehicleNumber: string;
  @Column()
  type: string;
  @Column()
  signedBy: string;
  @Column()
  order_id: string;
  @Column()
  comments: string;
  @Column({ default: 1 })
  quantity: number;
}
