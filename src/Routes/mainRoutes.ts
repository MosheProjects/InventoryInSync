import express from 'express'
import { NProuter } from './notepadRouter'
import { visitsRouter } from './visitsRouter';

export const mainRouter = express.Router();

mainRouter.use('/Notepad',NProuter);
mainRouter.use('/Visits',visitsRouter);

