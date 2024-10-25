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

const chance = new Chance(42);

function createData(id) {
  return {
    id,
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    phone: chance.phone(),
    state: chance.state({ full: true }),
  };
}

const columns = [
  {
    width: 30,
    label: "Sno.",
    dataKey: "id",
    numeric: true,
  },
  {
    width: 100,
    label: "First Name",
    dataKey: "firstName",
  },
  {
    width: 100,
    label: "Last Name",
    dataKey: "lastName",
  },
  {
    width: 50,
    label: "Age",
    dataKey: "age",
    numeric: true,
  },
  {
    width: 110,
    label: "State",
    dataKey: "state",
  },
  {
    width: 130,
    label: "Phone Number",
    dataKey: "phone",
  },
];

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

export default function ReactVirtualizedTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [sortConfig, setSortConfig] = React.useState({
    key: null,
    direction: null,
  });

  const handleSort = (columnKey) => {
    let direction = "ascending";
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedRows = [...rows].sort((a, b) => {
      if (a[columnKey] < b[columnKey]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[columnKey] > b[columnKey]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key: columnKey, direction });
    setRows(sortedRows);
  };

  const fixedHeaderContent = () => (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            borderRight: "2px solid #343148FF", // Vertical lines between body cells
            borderLeft: "2px solid #343148FF",
            borderTop: "2px solid #343148FF",
            alignItems: "center",
            cursor: "pointer"
          }}
          onClick={() => handleSort(column.dataKey)}
        >
          {column.label}
          {sortConfig.key === column.dataKey ? (
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
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
          sx={{
            fontSize: 13,
            fontWeight: "bold",
            color: "#D7C49EFF",
            borderRight: "2px solid #D7C49EFF", // Vertical lines between body cells
          }}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );

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
