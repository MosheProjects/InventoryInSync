import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getColumnNames } from "../../Api/metadata";

export default function LendingForm() {

  

  const { data } = useQuery("columns", async () => {
    const response = await getColumnNames("taken_items");
    return response;
  });

const lendingFormFields=[
    "שם מלא","מספר טלפון נייד","שם ענף/חברה","בודק/ת","מיקום","הערות"
]
const categories=["רתמות","מחשבים","דיסק און קי","מכלולים","ציוד היקפי"]


  return (
    <Box
    display={"flex"}
    flexWrap={'wrap'}
      margin={30}
      width={600}
      bgcolor={"#f9f97cb0"}
      border={2}
      borderRadius={"15px"}
      dir="rtl"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" component="h1" gutterBottom>
        {" "}
        מילוי טופס השאלה{" "}
      </Typography>
      <FormGroup>
      {lendingFormFields.map((fieldName: string) => {
        return (
            <FormControlLabel  label={fieldName} control={<TextField 
            placeholder={fieldName}
            multiline
            id="outlined-size-small"
            rows={fieldName === "הערות" ? 6 : 1}

          /> }
         
          />
        );
      })}
  <FormControlLabel control={<Checkbox />} label="הושאל לטווח ארוך" value="הושאל לטווח ארוך" />
      </FormGroup>

      <div >
      <Select labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value="hi"
          label="Age">
      
        {categories.map((category)=>{
            return(
                <MenuItem>{category}</MenuItem> 

            )
        })}
      </Select>
      </div>
    </Box>
  );
}
