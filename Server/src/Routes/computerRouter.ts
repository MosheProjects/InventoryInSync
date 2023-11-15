import express from 'express'
import { addComputer, getComputer ,deleteComputer} from '../Controllers/computersController';


const computerRouter  = express.Router();

computerRouter.post('/add',addComputer)
computerRouter.get('/get',getComputer)
computerRouter.delete('/delete/:id', deleteComputer)



export {computerRouter}