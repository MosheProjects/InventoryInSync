import {insertNewVisit,getAllVisits,deleteVisitbyId} from '../DB/visitsTBL'



export const addVisit = async (req,res)=>{
    try{
        const newVisit = req.body
        const tableInfo = await insertNewVisit(newVisit)
        console.log(tableInfo);
        res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}


export const getVisits = async (req,res)=>{
    const tableInfo = await getAllVisits()
    console.log(tableInfo);
    res.json(tableInfo);
}

export const deleteVisit=async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteVisitbyId(id)
    res.json(deleteresponse)
}