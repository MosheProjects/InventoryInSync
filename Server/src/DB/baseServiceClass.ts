import { BaseEntity, Repository } from "typeorm";
import { cables } from "../Entities/cables";

export class baseServiceClass<T>{
    entity : Repository<T>

    constructor(entity: Repository<T>) {
        this.entity = entity
    }

     insert = async (newProduct: T) => {
    
        try {
        const newCable = this.entity.create(newProduct);
        return  await newCable.save()
        }
    
        catch(error){
            console.error(error);
        }
    }
    
    
      getAll=async (table)=>{
        try {
           const AllCables= await table.find();
           console.log(AllCables);
           return(AllCables)
        } catch (error) {
            console.error(error);
        }
    }
    
    
    
    
      deleteById=async(table,id)=>{
        try {
            await table.delete(id)
            return  this.getAll(table)
        } catch (error) {
            console.error(error);
            
        }
    }

}
 