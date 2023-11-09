import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'



@Entity()
export class users extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    "שם מלא":string;
    @Column()
    "מספר טלפון":string;
    @Column()
    "קבוצה" : string
}