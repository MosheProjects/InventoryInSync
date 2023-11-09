import { computers } from "../Entities/computers";

export const insertNewComputers =async (newProduct:object) => {
    
    try {
    
    const newComputer = computers.create(newProduct);
    return  await newComputer.save()

    }

    catch(error){
        console.error(error);
        
    }
}


export const getAllComputers=async ()=>{
    try {
       const allComputers= await computers.query("select * from computers")
       console.log(allComputers);
       return(allComputers)
    } catch (error) {
        console.error(error);
        
    }
}




export const deleteComputersFromDB=async(id:number)=>{
    try {
        await computers.delete(id)
        return  getAllComputers()
    } catch (error) {
        console.error(error);
        
    }
}