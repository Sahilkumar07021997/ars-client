import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import {
  DropDownType,
  MonthOptions,
  YearOptions,
} from "../../../../../constants/tab-toolbar-constants";
import LoaderSpinner from "../../../../components/loading-spinner";

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
  const [selectedOption, setSelectedOption] = useState({
    year: null,
    month: null,
  });
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadedYearMonth, setLoadedYearMonth] = useState({
    year: null,
    month: null,
  });

  const handleSelect = (type, value) => {
    switch (type) {
      case DropDownType.MonthOptionType:
        setSelectedOption((prevState) => ({ ...prevState, month: value }));
        break;
      case DropDownType.YearOptionType:
        setSelectedOption((prevState) => ({ ...prevState, year: value }));
        break;
      default:
        return;
    }
  };

  const onClickHandler = () => {
    setLoadedYearMonth(selectedOption);
    setLoading(true);
    setLoaded(false); // Reset loaded state when new load starts
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 5000); // Simulating loading time
  };

  return (
    <div className="exec-summary-container">
      <h2>
        {tabDisplay.toUpperCase()}:&nbsp;
        {loadedYearMonth.month && loadedYearMonth.year ? (
          `${loadedYearMonth.month} ${loadedYearMonth.year}`
        ) : (
          <span
            style={{ color: "gray", fontStyle: "italic", fontSize: "0.9em" }}
          >
            Please select a year, month and load!
          </span>
        )}
      </h2>
      <div className="container-toolbar">
        <ReusableDropdown
          options={YearOptions}
          onSelect={(value) => handleSelect(DropDownType.YearOptionType, value)}
          disabledText={"Select year..."}
        />
        <ReusableDropdown
          options={MonthOptions}
          onSelect={(value) =>
            handleSelect(DropDownType.MonthOptionType, value)
          }
          disabledText={"Select month..."}
        />
        <ReusableButton
          buttonText="Generate"
          width="auto"
          height="30px"
          disabled={!(selectedOption.month && selectedOption.year)}
          onClick={onClickHandler}
        />
      </div>
      <div className="exec-summary-content">
        {loading ? <LoaderSpinner /> : loaded ? <p>Content loaded!!</p> : null}
      </div>
    </div>
  );
};

export default ExecSummary;
