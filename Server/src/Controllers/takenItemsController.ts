import {  insertNewLoan,getAllItems,deleteItemFromDB} from "../DB/taken_itemsTBL";

export const addLoan= async (req,res)=>{
    
        const item = req.body
        
        const tableInfo = await insertNewLoan(item)
        console.log(tableInfo);
        res.json(tableInfo);
}

export const getItem = async (req,res)=>{
    const tableInfo = await getAllItems()
    console.log(tableInfo);
    res.json(tableInfo);
}

export const deleteItem=async(req,res)=>{
    const id=req.params;
    const deleteresponse= await deleteItemFromDB(id)
    res.json(deleteresponse)
}
