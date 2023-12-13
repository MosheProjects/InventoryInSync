import { AppDataSource } from "./connection";

export const getColumnsNames = (tblname) => {
  try {
    const response = AppDataSource.getMetadata(tblname).columns.map(
      (column) => ({ name: column.propertyName, type: column.type })
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
