/**
 * Columns Configuration
 *
 * Defines the column settings for displaying data in a table format.
 * Each column represents either a serial number, a line item name, or a month of the year.
 *
 * @type {Array<Object>} Array of column configuration objects with properties such as width, label, columnDataKey, dataType, etc.
 */
export const ColumnConfig = [
  {
    width: 50,
    label: "line code",
    columnDataKey: "1000",
    dataKeyName: "sno",
    fixedColumns: true,
    dataType: "integer", // Example data type for serial number
  },
  {
    width: 100,
    label: "Line Item Category",
    columnDataKey: "1001",
    dataKeyName: "lineItemCategory",
    dataType: "string", // Example data type for item name
  },
  {
    width: 300,
    label: "Line Item Name",
    columnDataKey: "1002",
    dataKeyName: "lineItemName",
    dataType: "string", // Example data type for item name
  },
  {
    width: 65,
    label: "January",
    columnDataKey: "30001",
    dataKeyName: "january",
    monthType: 1,
    dataType: "money",
  },
  {
    width: 65,
    label: "February",
    columnDataKey: "30002",
    dataKeyName: "february",
    monthType: 2,
    dataType: "money",
  },
  {
    width: 65,
    label: "March",
    columnDataKey: "30003",
    dataKeyName: "march",
    monthType: 3,
    dataType: "money",
  },
  {
    width: 65,
    label: "April",
    columnDataKey: "30004",
    dataKeyName: "april",
    monthType: 4,
    dataType: "money",
  },
  {
    width: 65,
    label: "May",
    columnDataKey: "30005",
    dataKeyName: "may",
    monthType: 5,
    dataType: "money",
  },
  {
    width: 65,
    label: "June",
    columnDataKey: "30006",
    dataKeyName: "june",
    monthType: 6,
    dataType: "money",
  },
  {
    width: 65,
    label: "July",
    columnDataKey: "30007",
    dataKeyName: "july",
    monthType: 7,
    dataType: "money",
  },
  {
    width: 65,
    label: "August",
    columnDataKey: "30008",
    dataKeyName: "august",
    monthType: 8,
    dataType: "money",
  },
  {
    width: 65,
    label: "September",
    columnDataKey: "30009",
    dataKeyName: "september",
    monthType: 9,
    dataType: "money",
  },
  {
    width: 65,
    label: "October",
    columnDataKey: "30010",
    dataKeyName: "october",
    monthType: 10,
    dataType: "money",
  },
  {
    width: 65,
    label: "November",
    columnDataKey: "30011",
    dataKeyName: "november",
    monthType: 11,
    dataType: "money",
  },
  {
    width: 65,
    label: "December",
    columnDataKey: "30012",
    dataKeyName: "december",
    monthType: 12,
    dataType: "money",
  },
];

/**
 * Data Key to Data Key Name Enum
 *
 * Maps each dataKeyName to its corresponding columnDataKey for easy lookup.
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
