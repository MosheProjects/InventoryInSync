import React, { useEffect, useState } from "react";
import { ProductTable } from "./ProductTable";
import { useQuery } from "react-query";
import { getColumnNames, getTblByName } from "../../Api/metadata";
import { EQUIPMENT_CATAGORIES } from "../../Constants/consts";
import { Tab, Tabs } from "@mui/material";

const TableData = () => {
  const [table, setTable] = useState<string>("cables");
  const [tabValue, setTabValue] = useState<number>(0);

  const { data: data1 } = useQuery(["columns",table], async () => {
    const response = await getColumnNames(table);
    return response;
  });

  const { data: data2 } = useQuery(table, async () => {
    const response = await getTblByName(table);
    return response;
  });

  const handleChange = async (
    i: number,
    category: React.SetStateAction<string>
  ) => {
    setTable(category);
    setTabValue(i);
    console.log(data1,data2);
    
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      dir="rtl"
    >
      <h1 className="m-4">בחר קטגוריה</h1>
      <div className="d-flex m-3 gap-5">
        <Tabs
          value={tabValue}
          onChange={(e, newValue) =>
            handleChange(newValue, EQUIPMENT_CATAGORIES[newValue].en)
          }
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-around", // Adjust this value to control space between tabs
            },
            "& .MuiTab-root": {
              minWidth: "200px", // Adjust this value to control tab width
            },
          }}
        >
          {EQUIPMENT_CATAGORIES?.map((category, i) => (
            <Tab key={i} value={i} label={category.he} />
          ))}
        </Tabs>
      </div>
      <ProductTable columnNames={data1} tableName={table} tableInfo={data2} />
    </div>
  );
};

export default TableData;
