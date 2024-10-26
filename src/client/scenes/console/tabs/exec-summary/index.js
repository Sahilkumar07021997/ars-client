import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import {
  DropDownType,
  MonthOptions,
  YearOptions,
} from "../../../../../constants/tab-toolbar-constants";
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

  const handleSelect = (type, value) => {
    switch (type) {
      case DropDownType.MonthOptionType:
        setSelectedOption(value);
        console.log("Selected Month:", value);
        break;
      case DropDownType.YearOptionType:
        setSelectedOption(value);
        console.log("Selected Year:", value);
        break;
      default:
        return null;
    }
  };

  return (
    <div className="exec-summary-container">
      <h2>{tabDisplay}</h2>
      <div className="exec-summary-container-toolbar">
        <ReusableDropdown
          options={YearOptions}
          onSelect={() => handleSelect(DropDownType.YearOptionType)}
          disabledText={"select year..."}
        />
        <ReusableDropdown
          options={MonthOptions}
          onSelect={() => handleSelect(DropDownType.YearOptionType)}
          disabledText={"select month..."}
        />
        <ReusableButton buttonText="Generate" width="auto" />
      </div>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default ExecSummary;
