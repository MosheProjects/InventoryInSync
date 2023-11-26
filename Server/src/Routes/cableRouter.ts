import express from 'express'
import { cablesController } from '../Controllers/cablesController';
import { Cables } from '../DB/cablesTBL';

const cableRouter = express.Router();

cableRouter.post('/add',)
cableRouter.get('/get',getAllTBL)
cableRouter.delete('/delete/:id', deleteItem)


export {cableRouter}