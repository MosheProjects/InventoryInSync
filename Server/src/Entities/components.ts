import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity()
export class components extends BaseEntity {
  @PrimaryColumn()
  name: string;
  @Column()
  vehicleNumber: string;
  @Column()
  related_vehicle: string;
  @Column()
  signedBy: string;
  @Column()
  order_id: string;
  @Column()
  comments: string;
  @Column({ default: 1 })
  quantity: number;
}
