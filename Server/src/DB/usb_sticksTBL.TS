import { usb_sticks } from "../Entities/usb_sticks";

export const insertNewUsb =async (newProduct:object) => {
    
    try {
    
    const newUsb = usb_sticks.create(newProduct);
    return  await newUsb.save()

    }

    catch(error){
        console.error(error);
        
    }
}


export const getAllUsb=async ()=>{
    try {
       const allUsb= await usb_sticks.query("select * from usb_sticks")
       console.log(allUsb);
       return(allUsb)
    } catch (error) {
        console.error(error);
        
    }
}




export const deleteUsbFromDB=async(id:number)=>{
    try {
        await usb_sticks.delete(id)
        return  getAllUsb()
    } catch (error) {
        console.error(error);
        
    }
}