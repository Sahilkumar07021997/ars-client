import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
/**
 * ExecSummary Component
 *
 * This component represents the Executive Summary section of the ARS Artificial Intelligence Reporting System WebApp.
 * It renders the container with a heading for the executive summary.
 *
 * @param {Object} props - The props object for the component.
 * @returns {JSX.Element}
 */
const ExecSummary = (props) => {
  const { tabDisplay } = useSelector((state) => state.console);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  return (
    <div className="exec-summary-container">
      <h2>{tabDisplay}</h2>
      <div className="exec-summary-container-toolbar">
        <ReusableDropdown options={options} onSelect={handleSelect} />
        <ReusableButton buttonText="Generate" width="auto" />
      </div>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default ExecSummary;
