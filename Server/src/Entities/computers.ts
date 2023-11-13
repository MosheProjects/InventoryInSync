import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class computers extends BaseEntity{
    @PrimaryGeneratedColumn()
    name:string;
    @Column()
   id:number;
    @Column()
    type:string;
    @Column()
    signedBy:string;
    @Column()
    order_id:string;
    @Column()
   comments:string;
   @Column()
   is_available:string;

}