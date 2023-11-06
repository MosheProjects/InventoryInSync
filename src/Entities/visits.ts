import {Entity , PrimaryGeneratedColumn , Column, BaseEntity,CreateDateColumn } from "typeorm"
import {v4 as uuidv4} from 'uuid'



@Entity()


export class Visits extends BaseEntity{
   
    @PrimaryGeneratedColumn(uuidv4)
    id:string;
    @CreateDateColumn()
    createdDate:Date
    @Column()
    visiter:string;
    @Column()
    issuedBy:string;
    @Column()
    comments:string;
   
}