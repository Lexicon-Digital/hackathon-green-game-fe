import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Purchase ID", width: 150 },
  { field: "firstName", headerName: "Date", width: 150 },
  { field: "lastName", headerName: "Supermarket", width: 150 },
  {
    field: "age",
    headerName: "Average Score",
    type: "number",
    width: 150,
  },
  { field: "arrow", headerName: "Overall Position", width: 150 },
];

const rows = [
  {
    id: 1,
    lastName: "Coles",
    firstName: "21/12/2021",
    age: 3.3,
    arrow: "↑",
  },
  { id: 2, lastName: "Costco", firstName: "12/12/2021", age: 3.4, arrow: "↑" },
  { id: 3, lastName: "Coles", firstName: "02/10/2021", age: 4, arrow: "↑" },
  {
    id: 4,
    lastName: "Woolworths",
    firstName: "06/09/1991",
    age: 2.2,
    arrow: "↓",
  },
  { id: 5, lastName: "IGA", firstName: "22/10/2021", age: 3.4, arrow: "↓" },
  { id: 6, lastName: "Coles", firstName: "01/01/2021", age: 5, arrow: "↑" },
  { id: 7, lastName: "Coles", firstName: "05/05/2021", age: 5, arrow: "↑" },
  { id: 8, lastName: "Coles", firstName: "09/06/2021", age: 2.2, arrow: "↓" },
  { id: 9, lastName: "Coles", firstName: "01/01/2021", age: 4.1, arrow: "↑" },
];

export default function DataTable() {
  return (
    <div className="title">
      {" "}
      <h1>Purchases</h1>
      <div
        style={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
