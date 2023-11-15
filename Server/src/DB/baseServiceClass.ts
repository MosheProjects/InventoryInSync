
export class baseServiceClass{


     insert = async (table,newProduct:object) => {
    
        try {
        const newCable = table.create(newProduct);
        return  await newCable.save()
        }
    
        catch(error){
            console.error(error);
        }
    }
    
    
      getAll=async (table)=>{
        try {
           const AllCables= await table.query.find()
           console.log(AllCables);
           return(AllCables)
        } catch (error) {
            console.error(error);
        }
    }
    
    
    
    
      deleteById=async(table,id)=>{
        try {
            await table.delete(id)
            return  this.getAll(table)
        } catch (error) {
            console.error(error);
            
        }
    }

}
 