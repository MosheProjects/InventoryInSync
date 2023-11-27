import express from 'express'
import { ComputersController } from '../Controllers/computersController';
import { AppDataSource } from '../DB/connection';
import { ComputersService } from '../DB/copmutersTBL';
import { computers } from '../Entities/computers';


export const computerRouter = express.Router();
const repo=AppDataSource.getRepository(computers)
const service=new ComputersService(repo)
const ClassController=new ComputersController(service,"computers")


computerRouter.post('/add',ClassController.add)
computerRouter.get('/get',ClassController.getAllTBL)
computerRouter.delete('/delete/:id',ClassController.deleteItem)