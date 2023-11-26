import { DataSource } from "typeorm";
import { Notepad } from "../Entities/Notepad";
import { Visits } from "../Entities/visits";
import { computers } from "../Entities/computers";
import {  cables } from "../Entities/cables";
import { components } from "../Entities/components";
import { usb_sticks } from "../Entities/usb_sticks";
import { users } from "../Entities/users";
import { generalProducts } from "../Entities/generalProducts";
import { taken_items } from "../Entities/taken_items";


export const AppDataSource = new DataSource({
    type :"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"1234567",
    database:"postgres",
    entities:[Notepad,Visits,computers , cables , components ,usb_sticks , users , generalProducts ,taken_items],
    synchronize:true
})

