/**
 * Year Options
 *
 * Provides an array of selectable years for data filtering within the application.
 * Each entry represents a specific year available for users to choose from.
 *
 * @returns {Array<number>} Array of years from 2014 to 2024.
 */
export const YearOptions = [
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];
/**
 * Month Names
 *
 * Provides an array of month names for easy access and lookup.
 * Indexed from 1 (January) to 12 (December) with 0 as "all".
 *
 * @returns {Array<string>} Array of month names where 0 represents "all" and 1-12 represent January to December.
 */
export const MonthOptions = [
  "all", // 0
  "january", // 1
  "february", // 2
  "march", // 3
  "april", // 4
  "may", // 5
  "june", // 6
  "july", // 7
  "august", // 8
  "september", // 9
  "october", // 10
  "november", // 11
  "december", // 12
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
};
