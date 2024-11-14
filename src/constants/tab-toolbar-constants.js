/**
 * Year Options
 *
 * Provides an array of selectable years for data filtering within the application.
 * Each entry represents a specific year available for users to choose from.
 *
 * @returns {Array<number>} Array of years from 2014 to 2024.
 */
export const YearOptions = [2022, 2023, 2024];
/**
 * Month Names
 *
 * Provides an array of month names for easy access and lookup.
 * Indexed from 1 (January) to 12 (December) with 0 as "all".
 *
 * @returns {Array<string>} Array of month names where 0 represents "all" and 1-12 represent January to December.
 */
export const MonthOptions = [
  // "all", // 0
  "January", // 1
  "February", // 2
  "March", // 3
  "April", // 4
  "May", // 5
  "June", // 6
  "July", // 7
  "August", // 8
  "September", // 9
  "October", // 10
  "November", // 11
  "December", // 12
];

/**
 * Month Option Type
 *
 * Maps month indices to their corresponding names using the MonthOptions array,
 * providing a readable format for each month. Useful for translating month indices
 * into user-friendly labels in the UI.
 *
 * @returns {Object} An object with numeric keys (0-12) mapped to month names as strings.
 */
export const MonthOptionType = Object.fromEntries(
  MonthOptions.map((name, index) => [index, name])
);

export const DropDownType = {
  YearOptionType: 0,
  MonthOptionType: 1,
  StatementOptionType: 2,
};

export const StatementOptions = [
  { display: "Income Statement", id: 1, isCustomOption: true },
  { display: "Balancesheet", id: 2, isCustomOption: true },
];

export const StatementOptionName = {
  1: "Income Statement",
  2: "Balancesheet",
};
