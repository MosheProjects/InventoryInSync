import express from 'express'
import { addInfo,getInfo,deleteNote } from '../Controllers/notepadInfo'

const NProuter = express.Router();

NProuter.post('/add', addInfo)
NProuter.get('/display', getInfo)
NProuter.delete('/delete/:id', deleteNote)

export {NProuter}