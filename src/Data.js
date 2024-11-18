import React from "react";
import data from "./sample.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react";
import CustomHeader from "./CustomHeader";

function Data(props) {
  const columnDefs = data.table_headers.map((header) => ({
    field: header.name,
    headerName: header.name,
    type: header.type,
    headerComponent: CustomHeader,
    sortable: true,
    filter: true,
    resizable: true,
  }));

  const rowData = data.table_data.map((row) =>
    Object.fromEntries(
      data.table_headers.map((header, index) => [header.name, row[index]])
    )
  );

  console.log(rowData);

  return (
    <div className="col-md-12">
      <div className="ag-theme-alpine" style={{ height: 400, width: "98%" }}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <span className="badge bg-secondary">PROJECT NAME</span>{" "}
              {data.project_name}
            </div>
            <div>
              <span className="badge bg-secondary">OUTPUT DATASET NAME</span>{" "}
              {data.output_name}
            </div>
            <div>
              <span className="badge bg-secondary">LAST RUN</span>{" "}
              {new Date(data.last_run).toLocaleString()}
            </div>
            <div>
              <span>Rows : </span> {data.row_count}
            </div>
          </div>
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ flex: 1, minWidth: 120 }}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
}

export default Data;
