import { Visits } from "../Entities/visits";


export const insertNewVisit =async (newVisit:object) => {
    
    try {
        
        const visit = Visits.create(newVisit)
        return await visit.save()

    }
    catch(error){
        console.error(error);
         }
}


export const getAllVisits=async ()=>{
    try {
       const allVisits = await Visits.query("select * from Visits")
       console.log(allVisits);
       return(allVisits)
    } catch (error) {
        console.error(error);
        
    }
}

export const deleteVisitbyId=async(id)=>{
    try {
        await Visits.delete(id)
        return  getAllVisits();
    } catch (error) {
        console.error(error);
        
    }
}