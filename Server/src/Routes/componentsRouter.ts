import express from 'express'
import { addComponents, deleteComponents, getComponents } from '../Controllers/componentsData';



const componentsRouter  = express.Router();

componentsRouter.post('/add',addComponents)
componentsRouter.get('/display',getComponents)
componentsRouter.delete('/delete/:id',deleteComponents )



export {componentsRouter}