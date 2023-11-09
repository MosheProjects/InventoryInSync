import { Box, TextField, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getColumnNames } from "../../Api/metadata";

export default function LendingForm() {
  const { data } = useQuery("columns", async () => {
    const response = await getColumnNames("taken_items");
    return response;
  });
  console.log(data);

  return (
    <Box
    width={'600px'}
      bgcolor={"yellow"}
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
      <Typography variant="h5" component="h2" gutterBottom>
        {" "}
        מילוי טופס השאלה{" "}
      </Typography>
      {data?.map((colName: string) => {
        return (
          <div>
            <TextField
              multiline
              id="outlined-size-small"
              defaultValue={colName}
              //   size={colName=="הערות"? 'medium':"small"}
              rows={colName === "הערות" ? 6 : 1}
            />
          </div>
        );
      })}
    </Box>
  );
}
