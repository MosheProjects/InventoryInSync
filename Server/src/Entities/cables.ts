import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class cables extends BaseEntity{
    @PrimaryGeneratedColumn()
   name:string;
    @Column()
    related_vehicle:number;
    @Column()
    comments:string;
    @Column()
    order_id:string;
    @Column()
    quantity:string;
    @Column()
    is_available:boolean;

}