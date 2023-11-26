import { Response,Request } from "express";
import { baseServiceClass } from "../DB/baseServiceClass";

export abstract class baseController<T>{

protected  readonly service :baseServiceClass<T>
protected abstract entityName:string

constructor(service :baseServiceClass<T>)
{
this.service=service;
}


 add = async (req:Request,res:Response)=>{
    
    const data = req.body
       const tableInfo =await this.service.insert(data)
       res.json(tableInfo);
    

}


 getAllTBL = async (table:T,req:Request,res:Response)=>{
    const tableInfo = await this.service.getAll(table)
    res.json(tableInfo);

}



deleteItem =async(table:T,req:Request,res:Response)=>{
    const id=req.params;
    const deleteresponse= await this.service.deleteById(table,id)
    res.json(deleteresponse)
}

}