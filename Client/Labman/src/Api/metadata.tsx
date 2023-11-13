import axios from "axios";

export const getColumnNames = async(tblName:string) => {

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



export const getTblByName = async(tblName:string) => {

    try{
const response = await axios.get(`http://localhost:3001/${tblName}/get`);
  
return response.data;
    }
    catch(error){
        throw new Error('Error fetching table')
    }
};

export const addToTBL = async(tblName:string,dataToAdd:object) => {

    try{
const response = await axios.post(`http://localhost:3001/${tblName}/add`,dataToAdd);
return response.data;
    }
    catch(error){
        throw new Error("error adding to table")
    }
};


export const deleteFromTBL = async(tblName:string,deletedItem:string) => {

    try{
const response = await axios.delete(`http://localhost:3001/${tblName}/delete/${deletedItem}`);
return response.data;
    }
    catch(error){
        throw new Error('Error fetching table')
    }
};

