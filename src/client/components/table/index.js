import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import Chance from "chance";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
} from "@mui/icons-material";
import { ColumnConfig } from "../../../constants/table-constants";

const chance = new Chance(100);

function createData(id) {
  return {
    sno: id,
    lineItemCategory: `Category_${chance.letter()}`,
    lineItemName: `Income_Name__${chance.letter()}`,
    january: chance.dollar(),
    february: chance.dollar(),
    march: chance.dollar(),
    april: chance.dollar(),
    may: chance.dollar(),
    june: chance.dollar(),
    july: chance.dollar(),
    august: chance.dollar(),
    september: chance.dollar(),
    october: chance.dollar(),
    november: chance.dollar(),
    december: chance.dollar(),
  };
}

const initialRows = Array.from({ length: 200 }, (_, index) =>
  createData(index)
);

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        backgroundColor: "#343148FF",
      }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export default function ReactVirtualizedTable(props) {
  const [rows, setRows] = React.useState(props.rows);
  const [sortConfig, setSortConfig] = React.useState({
    key: null,
    direction: null,
  });

  const handleSort = (columnKey, dataType) => {
    let direction = "ascending";
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedRows = [...rows].sort((a, b) => {
      let valueA = a[columnKey];
      let valueB = b[columnKey];
      if (dataType === "money") {
        valueA = parseFloat(valueA.replace(/[^0-9.-]+/g, ""));
        valueB = parseFloat(valueB.replace(/[^0-9.-]+/g, ""));
      }
      if (valueA < valueB) {
        return direction === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSortConfig({ key: columnKey, direction });
    setRows(sortedRows);
  };

  const fixedHeaderContent = () => (
    <TableRow>
      {ColumnConfig.map((column) => (
        <TableCell
          key={column.dataKeyName}
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
            color: "black",
            fontSize: 12,
            fontWeight: "bold",
            borderRight: "2px solid #343148FF", // Vertical lines between body cells
            borderLeft: "2px solid #343148FF",
            borderTop: "2px solid #343148FF",
            alignItems: "center",
            cursor: "pointer",
            textWrap: "wrap",
          }}
          onClick={() => handleSort(column.dataKeyName, column.dataType)}
        >
          {column.label}
          {sortConfig.key === column.dataKeyName ? (
            sortConfig.direction === "ascending" ? (
              <span>
                &nbsp;
                <ArrowUpwardOutlined />
              </span>
            ) : (
              <span>
                &nbsp;
                <ArrowDownwardOutlined />
              </span>
            )
          ) : null}
        </TableCell>
      ))}
    </TableRow>
  );

  const rowContent = (_index, row) => (
    <React.Fragment>
      {ColumnConfig.map((column, idx) => (
        <TableCell
          key={column.dataKeyName}
          align={column.numeric || false ? "right" : "left"}
          sx={{
            fontSize: 12,
            fontWeight: "bold",
            color: Boolean(row.isDerivedLineItem) ? "#343148ff" : "#D7C49EFF",
            backgroundColor: Boolean(row.isDerivedLineItem)
              ? "rgb(137 130 188)"
              : "#343148ff",
            borderRight: "2px solid #D7C49EFF", // Vertical lines between body cells
          }}
        >
          {row[column.dataKeyName]}
        </TableCell>
      ))}
    </React.Fragment>
  );
  console.log(rows);
  return (
    <Paper
      style={{ height: "70vh", width: "100%", backgroundColor: "#343148FF" }}
    >
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
