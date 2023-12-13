import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  FormControl,
} from "@mui/material";
import { addToTBL, deleteFromTBL, getTblByName } from "../../Api/metadata";
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

export default function LendingForm() {
  const [categoryChoice, setCategoryChoice] = useState<string>("");
  const [tableContent, setTableContent] = useState<any[]>([]);
  const [itemToFill, setitemToFill] = useState<TAKEN_ITEMS>();
  const [usersInfo, setusersInfo] = useState<USERS>();

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
      console.log(itemToFill);
      deleteFromTBL(categoryChoice, itemToFill?.item_name as string).then(
        (data) => {
          setTableContent(data);
        }
      );
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
    <Box
      onSubmit={handleSubmit}
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      margin={30}
      width={500}
      bgcolor={"#f9f97cb0"}
      border={2}
      borderColor={"#646cff"}
      borderRadius={"15px"}
      dir="rtl"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <FormGroup>
        <Typography margin={3} variant="h3" component="h1" gutterBottom>
          {" "}
          מילוי טופס השאלה{" "}
        </Typography>
        {USERS_INFO_FIELDS.map((fieldName) => {
          return (
            <FormControlLabel
              label
              control={
                <TextField
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
        <FormControlLabel
          onChange={() => fillItemTakenObject("status", "הושאל לטווח ארוך")}
          control={<Checkbox />}
          label="הושאל לטווח ארוך"
        />
      </FormGroup>
      <div className="m-5 d-flex flex-column gap-4">
        <h3>פריט השאלה</h3>
        <Select
          id={"equipment-select"}
          required
          value={categoryChoice}
          defaultValue="dgdgdfdfdfdf"
          fullWidth
          onChange={(e) => getProductTable(JSON.parse(e.target.value))}
        >
          {EQUIPMENT_CATAGORIES.map((category, i) => (
            <MenuItem key={i} value={JSON.stringify(category)}>
              {category.he}
            </MenuItem>
          ))}
        </Select>
        {tableContent.length !== 0 ? (
          <FormGroup>
            <h5>פריטים בטבלת {categoryChoice}</h5>
            {tableContent.map((item) => (
              <FormControlLabel
                className=" w-50 border m-1 border-dark rounded"
                control={<Checkbox />}
                label={item.name}
                onChange={() => fillItemTakenObject("item_name", item.name)}
              />
            ))}
          </FormGroup>
        ) : (
          <p>לא נמצאו פריטים במלאי</p>
        )}
      </div>
      <Button type="submit" className="m-5" variant="contained">
        אשר
      </Button>
    </Box>
  );
}
