import { AppDataSource } from "./connection";

export const getColumnsNames=(tblname)=>{
    try {
        const response= AppDataSource.getMetadata(tblname).columns.map((column) => column.propertyName);
        return response
    } catch (error) {
        console.error(error);
        
    }
}