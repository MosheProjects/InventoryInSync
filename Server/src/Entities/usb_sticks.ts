import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'



@Entity()
export class usb_sticks extends BaseEntity{
    @PrimaryGeneratedColumn()
    "name":string;
    @Column()
    "located":string;
    @Column()
    "belongesTo":string;
    @Column()
   "bootable":number
   @Column()
    "order_id" : string
    @Column()
    "comments": string

}