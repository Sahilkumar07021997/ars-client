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
 *
 * @returns {JSX.Element}
 */
const ReusableButton = ({
  buttonText = "button",
  width = "auto",
  height = "auto",
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: "#343148ff",
    color: "#D7C49EFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "5px",
  };

  return <button style={buttonStyle}>{buttonText}</button>;
};

// PropTypes for validation
ReusableButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

// Default props
ReusableButton.defaultProps = {
  width: "100px", // Default width
  height: "40px", // Default height
};

export default ReusableButton;
