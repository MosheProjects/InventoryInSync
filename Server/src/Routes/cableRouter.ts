import express from 'express'
import { addCables, deleteCables, getCables } from '../Controllers/cablesData';


const cableRouter = express.Router();

cableRouter.post('/add',addCables)
cableRouter.get('/display',getCables)
cableRouter.delete('/delete/:id', deleteCables)


export {cableRouter}