import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactVirtualizedTable from "../../../../components/table";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import { YearOptions } from "../../../../../constants/tab-toolbar-constants";
import LoaderSpinner from "../../../../components/loading-spinner";
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
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  const onClickHandler = () => {
    setLoading(true);
    setLoaded(false); // Reset loaded state when new load starts
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 5000); // Simulating loading time
  };

  return (
    <div className="balancesheet-container">
      <h2>
        {tabDisplay}:&nbsp;{selectedOption || "Please select a year!"}
      </h2>
      <div className="container-toolbar">
        <ReusableDropdown
          options={YearOptions}
          onSelect={handleSelect}
          disabledText={"select year..."}
        />
        <ReusableButton
          buttonText="Load"
          width="auto"
          height="30px"
          disabled={!selectedOption}
          onClick={onClickHandler}
        />
      </div>
      <div className="balancesheet-content">
        {loading ? (
          <LoaderSpinner />
        ) : loaded ? (
          <ReactVirtualizedTable />
        ) : null}
      </div>
    </div>
  );
};

export default Balancesheet;
