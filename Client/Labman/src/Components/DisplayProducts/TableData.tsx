import React, { useEffect, useState } from "react";
import { ProductTable } from "./ProductTable";
import { useQuery } from "react-query";
import { getColumnNames, getTblByName } from "../../Api/metadata";
import { EQUIPMENT_CATAGORIES } from "../../Constants/consts";
import { Tab, Tabs } from "@mui/material";

const TableData = () => {
  const [table, setTable] = useState<string>("");
  const [isQueryEnabled, setIsQueryEnabled] = useState(false);

  const { data: data1 } = useQuery("columns", async () => {
    const response = await getColumnNames(table);
    return response;
  },  {
    enabled: isQueryEnabled,
  });
  const { data: data2 } = useQuery(table, async () => {
    const response = await getTblByName(table)
    console.log(response);
    
    return response;
  },  {
    enabled: isQueryEnabled,
  });
// useEffect(()=>{
// console.log(data1,"==>",data2);
// console.log(isQueryEnabled);

// },[isQueryEnabled])
  const handleChange=(category: React.SetStateAction<string>)=>{
    setTable(category) ;
    setIsQueryEnabled(true);
  }

  return (
    <div dir="rtl">
      <h1>בחר קטגוריה</h1>
      <div className="d-flex m-3 gap-5">
        {EQUIPMENT_CATAGORIES.map((category) => (
          <Tabs
            onClick={() => handleChange(category.en)}
            aria-label="basic tabs example"
          >
            <Tab label={category.he} />
          </Tabs>
        ))}
      </div>
      <ProductTable columsName={data1} tableInfo={data2} />
    </div>
  );
};

export default TableData;
