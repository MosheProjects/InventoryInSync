import { Notepad } from "../Entities/Notepad";

export const insertNewNote =async (newNote) => {
    
    try {
        console.log("hi trying to insert");
        
        const notepad = Notepad.create({
            note :newNote
        })
        await notepad.save()
        return notepad

    }
    catch(error){
        console.error(error);
        
    }
}

export const getAllNotes=async ()=>{
    try {
       const allNotes= await Notepad.query("select * from notepad")
       console.log(allNotes);
       return(allNotes)
    } catch (error) {
        console.error(error);
        
    }
}

export const deleteNoteFromDB=async(id)=>{
    try {
        const response=await Notepad.delete(id)
        return  response
    } catch (error) {
        console.error(error);
        
    }
}