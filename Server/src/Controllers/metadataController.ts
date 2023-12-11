import { getColumnsNames } from "../DB/metadataDB";
import { Request,Response } from "express";

export const getNamesOfColumns=(req:Request,res:Response)=>{
const tblName=req.headers
console.log(tblName);

    const columns = getColumnsNames(tblName);
   
    res.json(columns)
   }


