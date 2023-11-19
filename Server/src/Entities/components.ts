import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
// FIXME: remove unused imports
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
    // FIXME: be consistent, should be signed_by
    signedBy:string;
    @Column()
  comments:string;
   @Column()
   // FIXME: be consistent, should be is_available
   isAvailabe:boolean;

}