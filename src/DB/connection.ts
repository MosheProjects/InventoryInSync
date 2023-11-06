import { DataSource } from "typeorm";
import { Notepad } from "../Entities/Notepad";


export const AppDataSource = new DataSource({
    type :"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"1234567",
    database:"postgres",
    entities:[Notepad],
    synchronize:true
})
