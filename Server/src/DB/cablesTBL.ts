import { cables } from "../Entities/cables";

export const insertNewCables =async (newProduct:object) => {
    
    try {
    
    const newCable = cables.create(newProduct);
    return  await newCable.save()

    }

    catch(error){
        console.error(error);
        
    }
}


export const getAllCables=async ()=>{
    try {
       const AllCables= await cables.query("select * from cables")
       console.log(AllCables);
       return(AllCables)
    } catch (error) {
        console.error(error);
        
    }
}




export const deleteCablesFromDB=async(id:number)=>{
    try {
        await cables.delete(id)
        return  getAllCables()
    } catch (error) {
        console.error(error);
        
    }
}