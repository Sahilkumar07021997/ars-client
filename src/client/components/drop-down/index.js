import React from "react";
import PropTypes from "prop-types";
/**
 * Reusable Dropdown Component
 *
 * Displays a customizable dropdown menu with consistent styling.
 *
 * @param {Object} props
 * @param {Array} props.options - The list of options to display in the dropdown.
 * @param {Function} props.onSelect - Function to call when an option is selected.
 *
 * @returns {JSX.Element}
 */
const ReusableDropdown = ({
  options,
  onSelect,
  width = "auto",
  height = "auto",
  disabledText = "Select an option...",
  selectedOption = "",
}) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  const dropdownStyle = {
    padding: "10px",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "rgb(173, 170, 197)",
    color: "white",
    border: "1px solid #343148ff",
    borderRadius: "5px",
    cursor: "pointer",
    width: width, // Adjust width as needed
    height: height,
    margin: "5px",
  };

  return (
    <select
      onChange={handleSelect}
      style={dropdownStyle}
      defaultValue={selectedOption}
    >
      <option value={""} disabled>
        {disabledText}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

// PropTypes for validation
ReusableDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ReusableDropdown;
