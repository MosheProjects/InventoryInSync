import { getAllComputers, insertNewComputers ,deleteComputersFromDB } from "../DB/copmutersTBL";





export const addComputer = async (req,res)=>{
    try{
        const data = req.body
       const tableInfo =  await insertNewComputers(data)
       console.log(tableInfo);
       res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}


export const getComputer = async (req,res)=>{
    const tableInfo = await getAllComputers()
    console.log(tableInfo);
    res.json(tableInfo);

    try {
        
    } 
    catch (error) {
        
    }


}



export const deleteComputer =async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteComputersFromDB(id)
    res.json(deleteresponse)
}