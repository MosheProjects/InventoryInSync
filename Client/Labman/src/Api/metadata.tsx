import axios from "axios";

export const getColumnNames = async(tblName:string) => {
    console.log(tblName);

    try{
const response = await axios.get("http://localhost:3001/columnsNames", {
    headers:{name:tblName}
  });
  
return response.data;
    }
    catch(error){
        throw new Error('Error fetching column name')
    
    }
};
