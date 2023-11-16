import { Response,Request } from "express";
import { baseServiceClass } from "../DB/baseServiceClass";


export class baseController extends baseServiceClass{


 add = async (table,req:Request,res:Response)=>{
    
    const data = req.body
       const tableInfo =await this.insert(table,data)
       console.log(tableInfo);
       res.json(tableInfo);
    

}


 getAllTBL = async (table,req:Request,res:Response)=>{
    const tableInfo = await this.getAll(table)
    console.log(tableInfo);
    res.json(tableInfo);

}



deleteItem =async(table ,req:Request,res:Response)=>{
    const id=req.params;
    const deleteresponse= await this.deleteById(table,id)
    res.json(deleteresponse)
}

}