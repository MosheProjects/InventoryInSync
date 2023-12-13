import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class generalProducts extends BaseEntity{
    @PrimaryGeneratedColumn()
   name:string;
    @Column()
    id:number;
    @Column()
    category:string;
    @Column()
    related_vehicle:string;
    @Column()
   signedBy:string;
    @Column()
  comments:string;
   @Column()
   location:string;
   @Column()
order_id:string;
@Column({default: 1 })
quantity: number;

}