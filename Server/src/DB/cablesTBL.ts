import { cables } from "../Entities/cables";
import { baseServiceClass } from "./baseServiceClass";



export class Cables extends baseServiceClass<>{
    constructor() {
        super(cables)
    } 

     declare getAll: (table: cables) => Promise<any>;
     declare deleteById: (table: cables, id: any) => Promise<any>;
     declare insert: (table: cables, newProduct: object) => Promise<any>;
}