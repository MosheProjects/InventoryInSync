import { generalProducts } from "../Entities/generalProducts";

export const insertNewGeneralProducts =async (newProduct:object) => {
    
    try {
    
    const newGeneralProducts = generalProducts.create(newProduct);
    return  await newGeneralProducts.save()

    }

    catch(error){
        console.error(error);
        
    }
}


export const getAllGeneralProducts=async ()=>{
    try {
       const allGeneralProducts= await generalProducts.query("select * from computers")
       console.log(allGeneralProducts);
       return(allGeneralProducts)
    } catch (error) {
        console.error(error);
        
    }
}




export const deleteGeneralProductsFromDB=async(id:number)=>{
    try {
        await generalProducts.delete(id)
        return  getAllGeneralProducts()
    } catch (error) {
        console.error(error);
        
    }
}