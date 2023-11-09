import { getAllComponents, insertNewComponents ,deleteComponentsFromDB } from "../DB/componentsTBL";





export const addComponents = async (req,res)=>{
    try{
        const data = req.body
       const tableInfo =  await insertNewComponents(data)
       console.log(tableInfo);
       res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}


export const getComponents = async (req,res)=>{
    const tableInfo = await getAllComponents()
    console.log(tableInfo);
    res.json(tableInfo);

    try {
        
    } 
    catch (error) {
        
    }


}



export const deleteComponents =async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteComponentsFromDB(id)
    res.json(deleteresponse)
}