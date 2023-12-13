import express from 'express'
import { cablesController } from '../Controllers/cablesController';
import { CablesService } from '../DB/cablesTBL';
import { cables } from '../Entities/cables';
import { AppDataSource } from '../DB/connection';



export const cableRouter = express.Router();
const repo=AppDataSource.getRepository(cables)
const service=new CablesService(repo)
const ClassController=new cablesController(service,"cables")


cableRouter.post('/add',ClassController.add)
cableRouter.get('/get',ClassController.getAllTBL)
cableRouter.delete('/delete/:id',ClassController.deleteItem)
cableRouter.put('/update',ClassController.updateItem)

