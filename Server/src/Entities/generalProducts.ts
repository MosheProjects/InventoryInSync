import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class generalProducts extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    "שם":string;
    @Column()
    " מספר צ":number;
    @Column()
    "קטגוריה ":string;
    @Column()
    "איזה כלי":string;
    @Column()
    "חתום":string;
    @Column()
   "הערות":string;
   @Column()
   "כמות":string;
   @Column()
   "מיקום":string;
   @Column()
   "מקט":string;

}