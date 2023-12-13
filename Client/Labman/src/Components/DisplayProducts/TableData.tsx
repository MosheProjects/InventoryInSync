import React, { useEffect, useState } from "react";
import { ProductTable } from "./ProductTable";
import { useQuery } from "react-query";
import { getColumnNames, getTblByName } from "../../Api/metadata";
import { EQUIPMENT_CATAGORIES } from "../../Constants/consts";
import { Tab, Tabs } from "@mui/material";

const TableData = () => {
  
  const [table, setTable] = useState<string>("cables");
  const tableFileds: string[] = ["שם פריט", "מקט", "כמות זמינה", "הערות"];

  const { data: data2 } = useQuery(table, async () => {
    const response = await getTblByName(table);
    return response;
  });

  const handleChange = (category: React.SetStateAction<string>) => {
    setTable(category);
  };

  return (
    <div dir="rtl">
      <h1>בחר קטגוריה</h1>
      <div className="d-flex m-3 gap-5">
        {EQUIPMENT_CATAGORIES?.map((category) => (
          <Tabs
            value={table}
            onClick={() => handleChange(category.en)}
            aria-label="basic tabs example"
          >
            <Tab value={category.en} label={category.he} />
          </Tabs>
        ))}
      </div>
      <ProductTable columsName={tableFileds} tableInfo={data2} />
    </div>
  );
};

export default TableData;
