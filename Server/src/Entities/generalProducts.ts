import {Entity , PrimaryGeneratedColumn , Column, BaseEntity, PrimaryColumn } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()
export class generalProducts extends BaseEntity {
  @PrimaryColumn()
  name: string;
  @Column()
  vehicleNumber: string;
  @Column()
  category: string;
  @Column()
  related_vehicle: string;
  @Column()
  signedBy: string;
  @Column()
  location: string;
  @Column()
  order_id: string;
  @Column()
  comments: string;
  @Column({ default: 1 })
  quantity: number;
}