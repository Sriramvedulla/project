import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormGroup, Input } from "reactstrap";

function createData(name, Stock, Price, TotalSales) {
  return { name, Stock, Price, TotalSales };
}

const rows = [
  createData("Abstract 3D", "32 in stock", "$ 45.99", 20),
  createData("Sarphenus Illustration", "32 in stock", "$ 45.99", 20),
];

export default function AccessibleTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: 985, marginLeft: 5, marginTop: 2 }}
    >
      <div className="tabletop">
        <h3>Product Sell</h3>
        <div className="tablecontent">
          <FormGroup>
            <Input
              id="exampleSearch2"
              name="search"
              placeholder="Search"
              type="search"
            />
          </FormGroup>
          <select id="quarterly">
            <option value="Last 30 days">Last 30 days</option>
          </select>
        </div>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">TotalSales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <b>{row.name}</b>
                <p>Lorem ipsum dolar sit amet,consecteur adipiscing elit</p>
              </TableCell>
              <TableCell align="right">{row.Stock}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.TotalSales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
