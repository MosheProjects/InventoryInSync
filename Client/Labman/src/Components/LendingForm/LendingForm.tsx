import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,Button
} from "@mui/material";
import { useQuery } from "react-query";
import { addToTBL, deleteFromTBL, getColumnNames, getTblByName } from "../../Api/metadata";
import { useState } from "react";

export default function LendingForm() {
  const { data } = useQuery("columns", async () => {
    const response = await getColumnNames("taken_items");
    return response;
  });
  console.log(data);
  

  const lendingFormFields = [
    "שם מלא",
    "מספר טלפון נייד",
    "שם ענף/חברה",
    "בודק/ת",
    "מיקום",
    "הערות",
  ];

  interface CategoryObjectType{
    he:string;
    en:string
  }
  type TypeOfMyObject=CategoryObjectType[]
  const equipmentCategories:TypeOfMyObject = [
    {he:"רתמות",en:"cables"},
    {he:"מחשבים",en:"computers"},
    {he:"דיסק און קי",en:"usb_sticks"},
    {he:"מכלולים",en:"components"},
    {he:"ציוד היקפי",en:"generalProducts"},
  ];

  const [categoryChoice, setCategoryChoice] = useState<string>("");
  const [tableContent, setTableContent] = useState<any[]>([]);

  const getProductTable = (e: CategoryObjectType) => {
    console.log(e);
    
    setCategoryChoice(e.he)
    const tableInfo = getTblByName(e.en);
    tableInfo.then((data) => {
      console.log(data);
      
      setTableContent(data);
    });
  };

const lendItem=(item:any)=>{
  addToTBL(categoryChoice,item).then(()=>{
    deleteFromTBL(categoryChoice,item.name).then((data)=>{
      setTableContent(data);
    })
  })
}


  return (
    <Box
      display={"flex"}
flexDirection={"column"}      gap={5}
      margin={30}
      width={600}
      bgcolor={"#f9f97cb0"}
      border={2}
      borderColor={'#646cff'}
      borderRadius={"15px"}
      dir="rtl"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormGroup>
        <Typography margin={3} variant="h3" component="h1" gutterBottom>
          {" "}
          מילוי טופס השאלה{" "}
        </Typography>
        {lendingFormFields.map((fieldName: string) => {
          return (
            <FormControlLabel
              label
              control={
                <TextField
                  placeholder={fieldName}
                  multiline
                  rows={fieldName === "הערות" ? 6 : 1}
                />
              }
            />
          );
        })}
        <FormControlLabel
          control={<Checkbox />}
          label="הושאל לטווח ארוך"
          value="הושאל לטווח ארוך"
        />
      </FormGroup>
      <div className="m-5 d-flex flex-column gap-4">
        <h3>פריט השאלה</h3>
        <Select
          value={categoryChoice}
          defaultValue="dgdgdfdfdfdf"
          fullWidth
          onChange={(e) => getProductTable(JSON.parse(e.target.value))}
        >
          {equipmentCategories.map((category, i) => (
            <MenuItem key={i} value={JSON.stringify(category)}>
              {category.he}
            </MenuItem>
          ))}
        </Select>
        {tableContent.length !== 0  ? (
<FormGroup>
<h5>פריטים בטבלת {categoryChoice}</h5>
{tableContent.map((item)=>
  <FormControlLabel control={<Checkbox />} label={item.name} onChange={()=>lendItem(item)}/>
)}
</FormGroup>
        ) : <p>לא נמצאו פריטים במלאי</p>}
      </div>
      <Button className="m-5" variant="contained">אשר</Button>
    </Box>
  );
}
