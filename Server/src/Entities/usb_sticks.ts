import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'



@Entity()
export class usb_sticks extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    "שם":string;
    @Column()
    "מקום אחסון":string;
    @Column()
    "למי שייך":string;
    @Column()
   "בוט-אבל":number
   @Column()
    "מקט" : string
    @Column()
    "הערות": string

}