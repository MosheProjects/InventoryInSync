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
} from "@mui/material";
import {
  addToTBL,
  deleteFromTBL,
  getTblByName,
  updateTBL,
} from "../../Api/metadata";
import { useEffect, useState } from "react";
import {
  LENDING_FORM_FIELDS,
  EQUIPMENT_CATAGORIES,
  CATAGORY_OBJECT_TYPE,
  USERS_INFO_FIELDS,
} from "../../Constants/consts";
import { TAKEN_ITEMS, USERS } from "../../Constants/dbEnteties";

//TO-DO:
//1.start using more types
//2.make components more generic and put the logic on-side or on page and use it via props
//3.put consts per file
//4.only things that are like authentication and autharization put in use-context
//5.server-side make base class that does the main stuff and all other db/servies or
//controller inherits from it b. try not to use raw sql when using typeorm library or alike
//c. handle errors and return proper response to client in order to display or use the format.

export default function LendingForm() {
  const [categoryChoice, setCategoryChoice] = useState<string>("");
  const [tableContent, setTableContent] = useState<any[]>([]);
  const [itemToFill, setitemToFill] = useState<TAKEN_ITEMS>();
  const [usersInfo, setusersInfo] = useState<USERS>();
  const [loandItem,setLoandItem]=useState<object>();
  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });

  useEffect(() => {
    if (categoryChoice !== "") {
      console.log("just set the catagory of item");
      fillItemTakenObject("item_category", categoryChoice);
      fillItemTakenObject("usersName", usersInfo?.name);
    }
  }, [categoryChoice]);

  const getProductTable = (e: CATAGORY_OBJECT_TYPE) => {
    console.log(e);

    setCategoryChoice(e.en);
    const tableInfo = getTblByName(e.en);
    tableInfo.then((data) => {
      console.log(data);
      setTableContent(data);
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget[0].id);

    addToTBL("taken_items", itemToFill as object).then(() => {
      const obj: any = { ...loandItem,"is_available":false};
      updateTBL(categoryChoice,obj).then((data) => {
        setTableContent(data);
      });
    });
  };

  const fillUserDetailes = (fieldName: string, field: any) => {
    const obj: any = { ...usersInfo, [fieldName]: field };
    setusersInfo(obj);
  };

  const fillItemTakenObject = (fieldName: string, field: any) => {
    const obj: any = { ...itemToFill, [fieldName]: field.name };
    setLoandItem(field);
    setitemToFill(obj);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="row"
        onSubmit={handleSubmit}
        margin={30}
        bgcolor={"#f9f97cb0"}
        border={3}
        width={700}
        borderColor={"#646cff"}
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
           onChange={(event, value) =>fillItemTakenObject("item_name",value)} 
            dir="rtl"
            disableCloseOnSelect
            disablePortal
            id="combo-box-demo"
            options={tableContent.map((item) => item.name)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="פריט"
              />
            )}
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
}
