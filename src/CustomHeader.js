import React from "react";

const CustomHeader = (props) => {
  const { displayName, column } = props;
  console.log(column);

  const dataType = column.getColDef().type || "Unknown";

  return (
    <div
      style={{ textAlign: "center", display: "flex", flexDirection: "column" }}
    >
      <div>{displayName}</div>
      <div style={{ fontSize: "12px", color: "gray", marginTop: "4px" }}>
        {dataType}
      </div>
    </div>
  );
};

export default CustomHeader;
