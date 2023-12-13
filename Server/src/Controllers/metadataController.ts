import { getColumnsNames } from "../DB/metadataDB";

export const getNamesOfColumns = (req, res) => {
  const tblName = req.headers;
  console.log(tblName);

  const columns = getColumnsNames(tblName);

  res.json(columns);
};
