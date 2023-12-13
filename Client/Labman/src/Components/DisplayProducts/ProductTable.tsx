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

type Props = {
  columsName: string[];
  tableInfo:
    | CABLES[]
    | COMPONENTS[]
    | COMPUTERS[]
    | GENERAL_PRODUCTS[]
    | USB_STICKS[];
};

export const ProductTable = ({ columsName, tableInfo }: Props) => {
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
              <StyledTableCell align="center">{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableInfo?.map((item) => (
            <StyledTableRow>
              <StyledTableCell align="center">{item.name}</StyledTableCell>
              <StyledTableCell align="center">{item.id}</StyledTableCell>
              <StyledTableCell align="center">{item.quantity}</StyledTableCell>
              <StyledTableCell align="center">{item.comments}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
