import { insertNewGeneralProducts,getAllGeneralProducts,deleteGeneralProductsFromDB } from "../DB/generalProductsTBL";

export const addGeneralProducts = async (req,res)=>{
    try{
        console.log("im in function trying to connect to db");
        const {note} = req.body
        console.log(note);
        
        const tableInfo = await insertNewGeneralProducts(note)
        console.log(tableInfo);
        res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}

export const getGeneralProducts = async (req,res)=>{
    const tableInfo = await getAllGeneralProducts()
    console.log(tableInfo);
    res.json(tableInfo);
}

export const deleteGeneralProducts=async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteGeneralProductsFromDB(id)
    res.json(deleteresponse)
}