import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class components extends BaseEntity{
    @PrimaryGeneratedColumn()
    name:string;
    @Column()
    id:number;
    @Column()
    related_vehicle:string;
    @Column()
    signedBy:string;
    @Column()
  comments:string;
   @Column()
   isAvailabe:string;

}