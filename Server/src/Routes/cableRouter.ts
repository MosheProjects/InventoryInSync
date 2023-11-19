import express from 'express'
import { cablesController } from '../Controllers/cablesController';

// FIXME: find a better name
const myclass=new cablesController()
const cableRouter = express.Router();

// FIXME: consistncy in naming: addCable, getCables, deleteCable
cableRouter.post('/add',myclass.add)
cableRouter.get('/get',myclass.getAllTBL)
cableRouter.delete('/delete/:id', myclass.deleteItem)


export {cableRouter}