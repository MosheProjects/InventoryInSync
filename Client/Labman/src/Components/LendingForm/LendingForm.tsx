import { useEffect, useState } from "react";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Button,
  Autocomplete,
  ThemeProvider,
  createTheme,
  Alert,
} from "@mui/material";
import { addToTBL, getTblByName, updateTBL } from "../../Api/metadata";
import { TAKEN_ITEMS, USERS } from "../../Constants/dbEnteties";
import {
  LENDING_FORM_FIELDS,
  EQUIPMENT_CATAGORIES,
  CATAGORY_OBJECT_TYPE,
  USERS_INFO_FIELDS,
} from "../../Constants/consts";

//TO-DO:
//1.start using more types
//2.make components more generic and put the logic on-side or on page and use it via props
//3.put consts per file
//4.only things that are like authentication and autharization put in use-context
//5.server-side make base class that does the main stuff and all other db/servies or
//controller inherits from it b. try not to use raw sql when using typeorm library or alike
//c. handle errors and return proper response to client in order to display or use the format.

const LendingForm = () => {
  const [alert, setAlert] = useState(false);
  const [categoryChoice, setCategoryChoice] = useState<string>("");
  const [tableContent, setTableContent] = useState<any[]>([]);
  const [itemToFill, setitemToFill] = useState<TAKEN_ITEMS>();
  const [usersInfo, setusersInfo] = useState<USERS>();
  const [loandItem, setLoandItem] = useState<object>();

  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });

  const getProductTable = (e: CATAGORY_OBJECT_TYPE) => {
    setCategoryChoice(e.en);
    fillItemTakenObject("item_category", e.he);
    const tableInfo = getTblByName(e.en);
    tableInfo.then((data) => {
      setTableContent(data);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fillItemTakenObject("users", usersInfo);
    addToTBL("users", usersInfo as object).then(() => {
      addToTBL("taken_items", itemToFill as object).then(() => {
        const obj: any = { ...loandItem, quantity: 0 };
        updateTBL(categoryChoice, obj).then(() => {
          setAlert(true);
        });
      });
    });
  };

  const fillUserDetailes = (fieldName: string, field: any) => {
    const obj: any = { ...usersInfo, [fieldName]: field };

    setusersInfo(obj);
  };
  const fillItemTakenObject = (fieldName: string, field: any) => {
    const obj: any = { ...itemToFill, [fieldName]: field };
    setitemToFill(obj);
  };
  return (
    <ThemeProvider theme={theme}>
      {alert && <Alert severity="success">הפריט הושאל בהצלחה</Alert>}
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="row"
        onSubmit={handleSubmit}
        margin={30}
        bgcolor={"#f9f97cb0"}
        border={3}
        width={700}
        borderColor={"#646CFF"}
        dir="rtl"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
      >
        <FormGroup className="m-4">
          {USERS_INFO_FIELDS.map((fieldName) => {
            return (
              <FormControlLabel
                label
                control={
                  <TextField
                    sx={{ bgcolor: "white" }}
                    id={fieldName.id}
                    required
                    placeholder={fieldName.he}
                    onChange={(e) =>
                      fillUserDetailes(fieldName.en, e.target.value)
                    }
                  />
                }
              />
            );
          })}
          {LENDING_FORM_FIELDS.map((fieldName) => {
            return (
              <FormControlLabel
                label
                control={
                  <TextField
                    sx={{ bgcolor: "white" }}
                    id={fieldName.id}
                    required
                    placeholder={fieldName.he}
                    multiline
                    rows={fieldName.he === "הערות" ? 6 : 1}
                    onChange={(e) =>
                      fillItemTakenObject(fieldName.en, e.target.value)
                    }
                  />
                }
              />
            );
          })}
        </FormGroup>
        <div className="m-5 gap-4 ">
          <h5>בחר קטגוריה</h5>
          <div className="d-flex flex-wrap gap-3 p-3">
            {EQUIPMENT_CATAGORIES.map((category, i) => (
              <div>
                <input
                  className="m-1"
                  onChange={() => getProductTable(category)}
                  name="category"
                  type="radio"
                  value={category.he}
                />
                {category.he}
              </div>
            ))}
          </div>
          <Autocomplete
            onChange={(event, value) => {
              fillItemTakenObject("item_name", value);
              setLoandItem(() =>
                tableContent.find((item) => item.name === value)
              );
            }}
            dir="rtl"
            disableCloseOnSelect
            disablePortal
            id="combo-box-demo"
            options={tableContent.map((item) =>
              item.quantity == 1 ? item.name : null
            )}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="פריט" />}
          />
          <FormControlLabel
            onChange={() => fillItemTakenObject("status", "הושאל לטווח ארוך")}
            control={<Checkbox />}
            label="הושאל לטווח ארוך"
          />
          <Button type="submit" className="m-5 w-50 " variant="contained">
            אשר
          </Button>
        </div>
      </Box>
    </ThemeProvider>
  );
};
export default LendingForm;
