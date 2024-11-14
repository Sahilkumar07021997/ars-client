import React from "react";

function TableDataLabels(props) {
  return (
    <div
      style={{
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
        marginLeft: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#343148ff",
            marginRight: 5,
          }}
        ></div>
        <span><b>Line Items</b></span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: "rgb(137 130 188)",
            marginRight: 5,
          }}
        ></div>
        <span><b>Derived Line Items</b></span>
      </div>
    </div>
  );
}

export default TableDataLabels;
