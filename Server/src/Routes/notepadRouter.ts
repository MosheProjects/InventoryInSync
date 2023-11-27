import express from 'express'
import { AppDataSource } from '../DB/connection';
import { Notepad } from '../Entities/Notepad';
import { NotePadController } from '../Controllers/notepadController';
import { NotepadService } from '../DB/notepadTBL';

export const NProuter = express.Router();
const repo=AppDataSource.getRepository(Notepad)
const service=new NotepadService(repo)
const ClassController=new NotePadController(service,"Notepad")


NProuter.post('/add',ClassController.add)
NProuter.get('/get',ClassController.getAllTBL)
NProuter.delete('/delete/:id',ClassController.deleteItem)