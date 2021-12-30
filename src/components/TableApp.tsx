import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {ICoin} from "../interfacece";
import currency from "../store/currency";

const TableApp = (() => {
  
  let validCurrency: ICoin[] =
    JSON.parse(JSON.stringify(currency.currency)) || [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">FullName</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">volume24hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {validCurrency.length > 0 ? (
            validCurrency.map((coin) => (
              <TableRow
                key={coin.name}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  <img src={coin.imageUrl} width="30px" />
                </TableCell>
                <TableCell align="left">{coin.name}</TableCell>
                <TableCell align="left">{coin.fullName}</TableCell>
                <TableCell align="left">${coin.price}</TableCell>
                <TableCell align="left">${coin.volume24hour}</TableCell>
              </TableRow>
            ))
          ) : (
            <div> Loading...</div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default TableApp;
