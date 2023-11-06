import { inventory } from "../Entities/inventory";

export const insertNewProduct =async (newProduct:object) => {
    
    try {
    
    const newInventory = inventory.create(newProduct);
    return  await newInventory.save()

    }

    catch(error){
        console.error(error);
        
    }
}


export const getAllProduct=async ()=>{
    try {
       const allProduct= await inventory.query("select * from inventory")
       console.log(allProduct);
       return(allProduct)
    } catch (error) {
        console.error(error);
        
    }
}




export const deleteProductFromDB=async(id:number)=>{
    try {
        await inventory.delete(id)
        return  getAllProduct()
    } catch (error) {
        console.error(error);
        
    }
}