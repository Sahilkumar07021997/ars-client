import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactVirtualizedTable from "../../../../components/table";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import { YearOptions } from "../../../../../constants/tab-toolbar-constants";
import LoaderSpinner from "../../../../components/loading-spinner";
/**
 * IncomeStatement Component
 *
 * This component represents the Income Statement section of the ARS Artificial Intelligence Reporting System WebApp.
 * It renders the container with a heading for the income statement.
 *
 * @param {Object} props - The props object for the component.
 * @returns {JSX.Element}
 */
const IncomeStatement = (props) => {
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
    tabDisplay && (
      <div className="income-statement-container">
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
        <div className="income-statement-content">
          {loading ? (
            <LoaderSpinner />
          ) : loaded ? (
            <ReactVirtualizedTable />
          ) : null}
        </div>
      </div>
    )
  );
};

export default IncomeStatement;
