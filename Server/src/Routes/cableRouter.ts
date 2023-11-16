import express from 'express'
import { cablesController } from '../Controllers/cablesController';

const myclass=new cablesController()
const cableRouter = express.Router();

cableRouter.post('/add',myclass.add)
cableRouter.get('/get',myclass.getAllTBL)
cableRouter.delete('/delete/:id', myclass.deleteItem)


export {cableRouter}