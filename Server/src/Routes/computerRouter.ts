import express from 'express'
import { addComputer, getComputer ,deleteComputer} from '../Controllers/computersData';


const computerRouter  = express.Router();

computerRouter.post('/add',addComputer)
computerRouter.get('/display',getComputer)
computerRouter.delete('/delete/:id', deleteComputer)



export {computerRouter}