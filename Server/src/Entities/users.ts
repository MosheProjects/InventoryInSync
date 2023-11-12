import {Entity , PrimaryGeneratedColumn , Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import {v4 as uuidv4} from 'uuid'
import { taken_items } from "./taken_items";
import 'reflect-metadata'


@Entity()
export class users extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    "name":string;

    @Column()
    "phone number":string;

    @Column()
    "group" : string

    @ManyToOne(() => taken_items, taken_items => taken_items.users)
    taken_items: taken_items[];
}