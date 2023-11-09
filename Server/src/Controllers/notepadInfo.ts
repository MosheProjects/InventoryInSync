import { insertNewNote,getAllNotes,deleteNoteFromDB } from "../DB/notepadTBL";

export const addNote= async (req,res)=>{
    try{
        console.log("im in function trying to connect to db");
        const {note} = req.body
        console.log(note);
        
        const tableInfo = await insertNewNote(note)
        console.log(tableInfo);
        res.json(tableInfo);
    }

    catch(error){
        console.error(error); 
    }
}

export const getNote = async (req,res)=>{
    const tableInfo = await getAllNotes()
    console.log(tableInfo);
    res.json(tableInfo);
}

export const deleteNote=async(req,res)=>{
    const{id}=req.params;
    const deleteresponse= await deleteNoteFromDB(id)
    res.json(deleteresponse)
}