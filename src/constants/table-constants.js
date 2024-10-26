/**
 * Columns Configuration
 *
 * Defines the column settings for displaying data in a table format.
 * Each column represents either a serial number, a line item name, or a month of the year.
 *
 * @type {Array<Object>} Array of column configuration objects with properties such as width, label, dataKey, dataType, etc.
 */
export const ColumnConfig = [
  {
    width: 5,
    label: "Sno.",
    dataKey: "1000",
    dataKeyName: "sno",
    numeric: true,
    fixedColumns: true,
    dataType: "integer", // Example data type for serial number
  },
  {
    width: 100,
    label: "Line Item Name",
    dataKey: "1001",
    dataKeyName: "lineItemName",
    dataType: "string", // Example data type for item name
  },
  {
    width: 35,
    label: "January",
    dataKey: "1002",
    dataKeyName: "january",
    monthType: 1,
    dataType: "money",
  },
  {
    width: 35,
    label: "February",
    dataKey: "1003",
    dataKeyName: "february",
    monthType: 2,
    dataType: "money",
  },
  {
    width: 35,
    label: "March",
    dataKey: "1004",
    dataKeyName: "march",
    monthType: 3,
    dataType: "money",
  },
  {
    width: 35,
    label: "April",
    dataKey: "1005",
    dataKeyName: "april",
    monthType: 4,
    dataType: "money",
  },
  {
    width: 35,
    label: "May",
    dataKey: "1006",
    dataKeyName: "may",
    monthType: 5,
    dataType: "money",
  },
  {
    width: 35,
    label: "June",
    dataKey: "1007",
    dataKeyName: "june",
    monthType: 6,
    dataType: "money",
  },
  {
    width: 35,
    label: "July",
    dataKey: "1008",
    dataKeyName: "july",
    monthType: 7,
    dataType: "money",
  },
  {
    width: 35,
    label: "August",
    dataKey: "1009",
    dataKeyName: "august",
    monthType: 8,
    dataType: "money",
  },
  {
    width: 35,
    label: "September",
    dataKey: "1010",
    dataKeyName: "september",
    monthType: 9,
    dataType: "money",
  },
  {
    width: 35,
    label: "October",
    dataKey: "1011",
    dataKeyName: "october",
    monthType: 10,
    dataType: "money",
  },
  {
    width: 35,
    label: "November",
    dataKey: "1012",
    dataKeyName: "november",
    monthType: 11,
    dataType: "money",
  },
  {
    width: 35,
    label: "December",
    dataKey: "1013",
    dataKeyName: "december",
    monthType: 12,
    dataType: "money",
  },
];

/**
 * Data Key to Data Key Name Enum
 *
 * Maps each dataKeyName to its corresponding dataKey for easy lookup.
 *
 * @enum {Object}
 */
export const DataKeyToNameEnum = {
  sno: 1000,
  lineItemName: 1001,
  january: 1002,
  february: 1003,
  march: 1004,
  april: 1005,
  may: 1006,
  june: 1007,
  july: 1008,
  august: 1009,
  september: 1010,
  october: 1011,
  november: 1012,
  december: 1013,
};
