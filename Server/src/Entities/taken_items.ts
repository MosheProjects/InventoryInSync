import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'



@Entity()
export class taken_items extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    "שם פריט":string;
    @Column()
    "שם מלא":string;
    @Column()
    "תאריך":Date;
    @Column()
   "כמות":number
   @Column()
    "סטטוס" : string
    @Column()
    "הערות": string

}