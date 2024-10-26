import React from "react";
import PropTypes from "prop-types";

/**
 * ComingSoon Component
 * 
 * Displays a placeholder message for upcoming features.
 * 
 * @param {Object} props
 * @param {string} props.message - The message to display in the placeholder.
 * 
 * @returns {JSX.Element}
 */
const ComingSoon = ({ message }) => {
  return (
    <div className="coming-soon-container">
      <h1>{message}</h1>
    </div>
  );
};

// PropTypes for validation
ComingSoon.propTypes = {
  message: PropTypes.string,
};

// Default props
ComingSoon.defaultProps = {
  message: "Coming Soon...⏳",
};

export default ComingSoon;
