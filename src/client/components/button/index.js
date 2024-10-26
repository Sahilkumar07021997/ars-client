import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Button Component
 *
 * Displays a customizable button.
 *
 * @param {Object} props
 * @param {string} props.buttonText - The text to display on the button.
 * @param {string} props.width - The width of the button (e.g., '100px', '50%').
 * @param {string} props.height - The height of the button (e.g., '40px', '10%').
 * @param {boolean} props.disabled - If true, disables the button.
 * @param {function} props.onClick - Function to call on button click.
 *
 * @returns {JSX.Element}
 */
const ReusableButton = ({
  buttonText,
  width,
  height,
  disabled,
  onClick,
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: disabled ? "#9b9b9b" : "#343148ff", // Lighter color when disabled
    color: disabled ? "#c5c5c5" : "#D7C49EFF", // Muted text color when disabled
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "5px",
    opacity: disabled ? 0.6 : 1, // Slight transparency when disabled
  };

  return (
    <button
      className="common-button"
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

// PropTypes for validation
ReusableButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func, // Add onClick as a prop type
};

// Default props
ReusableButton.defaultProps = {
  buttonText: "button", // Default button text
  width: "100px", // Default width
  height: "40px", // Default height
  disabled: false, // Default disabled state
  onClick: () => {}, // Default no-op function for onClick
};

export default ReusableButton;
