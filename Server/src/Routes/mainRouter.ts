import express from 'express'
import { NProuter } from './notepadRouter'
import { visitsRouter } from './visitsRouter';
import {inventoryRouter} from './inventoryRoutes'
export const mainRouter = express.Router();

mainRouter.use('/Notepad',NProuter);
mainRouter.use('/Visits',visitsRouter);
mainRouter.use('/Visits',inventoryRouter);

