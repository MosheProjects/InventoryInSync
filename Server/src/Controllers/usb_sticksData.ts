import { getAllUsb, insertNewUsb ,deleteUsbFromDB } from "../DB/usb_sticksTBL";





export const addUsb = async (req,res)=>{
    try{
        const data = req.body
       const tableInfo =  await insertNewUsb(data)
       console.log(tableInfo);
       res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}


export const getUsb = async (req,res)=>{
    const tableInfo = await getAllUsb()
    console.log(tableInfo);
    res.json(tableInfo);

    try {
        
    } 
    catch (error) {
        
    }


}



export const deleteUsb =async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteUsbFromDB(id)
    res.json(deleteresponse)
}