import express from 'express'
import { addNote,getNote,deleteNote } from '../Controllers/notepadInfo'

const NProuter = express.Router();

NProuter.post('/add', addNote)
NProuter.get('/display', getNote)
NProuter.delete('/delete/:id', deleteNote)

export {NProuter}