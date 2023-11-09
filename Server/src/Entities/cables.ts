import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class cables extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
   " שם":string;
    @Column()
    "איזה כלי":number;
    @Column()
    "הערות":string;
    @Column()
    "מקט":string;
    @Column()
    "כמות במלאי":string;
    @Column()
    "זמין":string;

}