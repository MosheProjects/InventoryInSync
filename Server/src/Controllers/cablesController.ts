import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { baseController } from "./BaseController";
import { cables } from "../Entities/cables";

export class cablesController extends baseController{
    declare add: (table: cables, req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<any>;
   declare deleteItem: (table: cables, id: any) => Promise<any>;
   declare getAllTBL: ( table: cables, req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<any>;
} 