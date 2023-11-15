import { components } from "../Entities/components";

export const insertNewComponents = async (newProduct : object) => {
    
    try {
    
    const newComponents = components.create(newProduct);
    return  await newComponents.save()

    }

    catch(error){
        console.error(error);
    }
}


export const getAllComponents=async ()=>{
    try {
       const allComponents= await components.query("select * from components")
       console.log(allComponents);
       return(allComponents)
    } catch (error) {
        console.error(error);
        
    }
}




export const deleteComponentsFromDB=async(id:number)=>{
    try {
        await components.delete(id)
        return  getAllComponents()
    } catch (error) {
        console.error(error);
        
    }
}