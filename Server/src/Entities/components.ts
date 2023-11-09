import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class components extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    "שם":string;
    @Column()
    " מספר צ":number;
    @Column()
    "איזה כלי":string;
    @Column()
    "חתום":string;
    @Column()
   "הערות":string;
   @Column()
   "זמינות":string;

}