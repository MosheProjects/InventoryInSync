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
import { FIELDS_OF_CATEGORIES,categoryFields } from "../../Constants/consts";
import { useEffect, useState } from "react";


interface colNamesObj {
  name: string;
  type:string
}

type Props = {
  columnNames: colNamesObj[];
  tableName: any;
  tableInfo:
    | CABLES[]
    | COMPONENTS[]
    | COMPUTERS[]
    | GENERAL_PRODUCTS[]
    | USB_STICKS[];
};

export const ProductTable = ({columnNames, tableName, tableInfo }: Props) => {
  const [fieldName, setFieldName] = useState<keyof categoryFields>(tableName); // Initial field name

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

  useEffect(() => {
    setFieldName(tableName);
  }, [tableName]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {FIELDS_OF_CATEGORIES[fieldName].map((column) => (
              <StyledTableCell align="center">{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableInfo?.map((item, i) => (
            <StyledTableRow key={i}>
              {columnNames?.map((col) => (
                <StyledTableCell align="center">
                  {item && col.name && item[col.name as keyof typeof item]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
