import express from 'express'
import { addProduct, getProduct ,deleteProduct} from '../Controllers/inventoryData';


const inventoryRouter  = express.Router();

inventoryRouter.post('/add',addProduct)
inventoryRouter.get('/display',getProduct)
inventoryRouter.delete('/delete/:id', deleteProduct)



export {inventoryRouter}