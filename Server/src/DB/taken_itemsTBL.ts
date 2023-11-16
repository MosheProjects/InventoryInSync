import { taken_items } from "../Entities/taken_items";




export const insertNewLoan =async (itemTaken) => {
    
    try {
        console.log("hi trying to insert");
        
        const newItemTaken = taken_items.create(itemTaken)
        return await newItemTaken.save()
         
    }
    catch(error){
        console.error(error);
        
    }
}

export const getAllItems=async ()=>{
    try {
       const allItems= await taken_items.find({})
       return(allItems)
    } catch (error) {
        console.error(error);
        
    }
}

export const deleteItemFromDB=async(id)=>{
    try {
        const response=await taken_items.delete(id)
        return  response
    } catch (error) {
        console.error(error);
        
    }
}
