import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import {
  CABLES,
  COMPONENTS,
  COMPUTERS,
  GENERAL_PRODUCTS,
  USB_STICKS,
} from "../../Constants/dbEnteties";

interface colNamesObj {
  name: string;
}

type Props = {
  columsName: colNamesObj[];
  tableInfo:
    | CABLES[]
    | COMPONENTS[]
    | COMPUTERS[]
    | GENERAL_PRODUCTS[]
    | USB_STICKS[];
};

export const ProductTable = ({ columsName, tableInfo }: Props) => {
  function getFieldInfo<T>(obj: T, field: keyof T): any {
    return obj[field];
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columsName?.map((column) => (
              <StyledTableCell>{column.name}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableInfo?.map((item) => (
            <StyledTableRow>
              {columsName?.map((field, i) => (
                <StyledTableCell align="right">
                  {getFieldInfo(tableInfo, i)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
