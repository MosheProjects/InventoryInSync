// FIXME: I would create a rentableEntity which will include all the general properties
// and ill add a column 'type' which will be the entity type enum (cable, computer, usb_stick, etc...)
// then after doing so you can remove most of the controllers and create just the general ones..
// another thing you will have to add is an endpoint that return rentableEntity by its type.
import {Entity , PrimaryGeneratedColumn , Column, BaseEntity } from "typeorm"
// FIXME: Remove unused imports
import {v4 as uuidv4} from 'uuid'
@Entity()


export class cables extends BaseEntity{
    // FIXME: I'm not sure that name should be primary generated column, I would use uuid instead
    @PrimaryGeneratedColumn()
   name:string;
    @Column()
    // FIXME: related_vehicle_id is a better name
    related_vehicle:number;
    @Column()
    comments:string;
    @Column()
    order_id:string;
    @Column()
    // FIXME: should be a number instead of string
    quantity:string;
    @Column()
    isAvailable:boolean;

}