import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class computers extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    "שם":string;
    @Column()
   "מספר צ":number;
    @Column()
    "סוג":string;
    @Column()
    "חתום":string;
    @Column()
    "מקט":string;
    @Column()
   "הערות":string;
   @Column()
   "זמינות":string;

}