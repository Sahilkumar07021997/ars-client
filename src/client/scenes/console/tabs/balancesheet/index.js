import React, {useState} from "react";
import { useSelector } from "react-redux";
import ReactVirtualizedTable from "../../../../components/table";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
/**
 * Balancesheet Component
 *
 * This component represents the Balance Sheet section of the ARS Artificial Intelligence Reporting System WebApp.
 * It renders the container with a heading for the balance sheet.
 *
 * @param {Object} props - The props object for the component.
 * @returns {JSX.Element}
 */
const Balancesheet = (props) => {
  const { tabDisplay } = useSelector((state) => state.console);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };
  return (
    <div className="balancesheet-container">
      <h2>{tabDisplay}</h2>
      <div className="exec-summary-container-toolbar">
        <ReusableDropdown options={options} onSelect={handleSelect} />
        <ReusableButton buttonText="Generate" width="auto" />
      </div>
      <ReactVirtualizedTable />
    </div>
  );
};

export default Balancesheet;
