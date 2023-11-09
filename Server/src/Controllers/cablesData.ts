import { getAllCables, insertNewCables ,deleteCablesFromDB } from "../DB/cablesTBL";





export const addCables = async (req,res)=>{
    try{
        const data = req.body
       const tableInfo =  await insertNewCables(data)
       console.log(tableInfo);
       res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}


export const getCables = async (req,res)=>{
    const tableInfo = await getAllCables()
    console.log(tableInfo);
    res.json(tableInfo);

    try {
        
    } 
    catch (error) {
        
    }


}



export const deleteCables =async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteCablesFromDB(id)
    res.json(deleteresponse)
}