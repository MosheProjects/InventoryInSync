import { getAllProduct, insertNewProduct ,deleteProductFromDB } from "../DB/inventoryTBL";





export const addProduct = async (req,res)=>{
    try{
        const data = req.body
       const tableInfo =  await insertNewProduct(data)
       console.log(tableInfo);
       res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}


export const getProduct = async (req,res)=>{
    const tableInfo = await getAllProduct()
    console.log(tableInfo);
    res.json(tableInfo);

    try {
        
    } 
    catch (error) {
        
    }


}



export const deleteProduct =async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteProductFromDB(id)
    res.json(deleteresponse)
}