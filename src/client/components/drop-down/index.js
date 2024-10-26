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
 * @param {string} props.width - The width of the dropdown (e.g., '100px', '50%').
 * @param {string} props.height - The height of the dropdown (e.g., '40px', '10%').
 * @param {string} props.disabledText - Placeholder text when no option is selected.
 * @param {string} props.selectedOption - The initially selected option.
 *
 * @returns {JSX.Element}
 */
const ReusableDropdown = ({
  options,
  onSelect,
  width,
  height,
  disabledText,
  selectedOption,
}) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  const dropdownStyle = {
    padding: "5px",
    fontSize: "10px",
    fontWeight: "bold",
    backgroundColor: "rgb(173, 170, 197)",
    color: "white",
    border: "1px solid #343148ff",
    borderRadius: "5px",
    cursor: "pointer",
    width: width,
    height: height,
    margin: "5px",
  };

  return (
    <select
      onChange={handleSelect}
      style={dropdownStyle}
      defaultValue={selectedOption}
    >
      <option value="" disabled>
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
  width: PropTypes.string,
  height: PropTypes.string,
  disabledText: PropTypes.string,
  selectedOption: PropTypes.string,
};

// Default props
ReusableDropdown.defaultProps = {
  width: "auto",
  height: "auto",
  disabledText: "Select an option...",
  selectedOption: "",
};

export default ReusableDropdown;
