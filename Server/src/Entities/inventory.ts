import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
import {v4 as uuidv4} from 'uuid'
@Entity()


export class inventory extends BaseEntity{
    @PrimaryGeneratedColumn(uuidv4)
    id:string;
    @Column()
    category:string;
    @Column()
    itemName:string;
    @Column()
    description:string;
    @Column()
    location:string;


}