import { Visits } from "../Entities/visits";
import { baseServiceClass } from "./baseServiceClass";



export class VisitsService extends baseServiceClass<Visits>{
  
  
 getVisits=async()=>{
        try {
           const AllVisits= await Visits.find();
           return(AllVisits)
        } catch (error) {
            console.error(error);
        }
    }

    


    
    
}