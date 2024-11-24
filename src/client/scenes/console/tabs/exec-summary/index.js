import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import {
  DropDownType,
  MonthOptions,
  StatementOptionName,
  StatementOptions,
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
    statementType: null,
  });
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadedYearMonth, setLoadedYearMonth] = useState({
    year: null,
    month: null,
    statementType: null,
  });
  const [data, setData] = useState(null);

  const handleSelect = (type, value) => {
    setData(null);
    switch (type) {
      case DropDownType.MonthOptionType:
        setSelectedOption((prevState) => ({ ...prevState, month: value }));
        break;
      case DropDownType.YearOptionType:
        setSelectedOption((prevState) => ({ ...prevState, year: value }));
        break;
      case DropDownType.StatementOptionType:
        setSelectedOption((prevState) => ({
          ...prevState,
          statementType: StatementOptionName[Number(value)],
        }));
        break;
      default:
        return;
    }
  };

  const onClickHandler = async () => {
    setLoadedYearMonth(selectedOption);
    setLoading(true);
    setLoaded(false);
    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const response = await fetch(
        `http://localhost:8000/exec-summary/report`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            year: parseInt(selectedOption.year),
            month: MonthOptions.indexOf(selectedOption.month) + 1,
            statementType: selectedOption.statementType,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(JSON.parse(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  return (
    <div className="exec-summary-container">
      <h2>
        {tabDisplay.toUpperCase()}:&nbsp;
        {loadedYearMonth.month &&
        loadedYearMonth.year &&
        loadedYearMonth.statementType ? (
          <span
            style={{ color: "#d1900f", fontWeight: "bold", fontSize: "1.2em" }}
          >
            $ {loadedYearMonth.statementType} - {loadedYearMonth.month}&nbsp;
            {loadedYearMonth.year} $
          </span>
        ) : (
          <span
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "0.9em",
              marginLeft: "1em",
            }}
          >
            Please select a year, month and generate!
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
        <ReusableDropdown
          options={StatementOptions}
          onSelect={(value) =>
            handleSelect(DropDownType.StatementOptionType, value)
          }
          disabledText={"Select Statement type..."}
        />
        <ReusableButton
          buttonText="Generate"
          width="auto"
          height="30px"
          disabled={
            !(
              selectedOption.month &&
              selectedOption.year &&
              selectedOption.statementType
            )
          }
          onClick={onClickHandler}
        />
      </div>
      <div className="exec-summary-content">
        {loading ? (
          <LoaderSpinner />
        ) : loaded ? (
          <div
            style={{
              height: "90%",
              overflowY: "auto",
              padding: "20px",
              border: "1px solid #ccc",
              maxWidth: "100%",
              backgroundColor: "#343148ff",
              margin: "0 auto",
              color: "white",
            }}
          >
            <h1 style={{ color: "#d1900f" }}>
              Executive summary and analysis - {selectedOption.statementType}
            </h1>
            <hr />
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <h2
                    style={{
                      color: "#d1900f",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.derivedLineItem}
                  </h2>
                  <p>
                    <strong>Value:</strong> {item.value}
                  </p>
                  <p>
                    <strong>Analysis:</strong> {item.analysis}
                  </p>
                  <p>
                    <strong>Financial Advice:</strong> {item.financialAdvice}
                  </p>
                  <p>
                    <strong>Responsible Line Items:</strong>
                  </p>
                  <ul>
                    {item.responsibleLineItems.map((lineItem, i) => (
                      <li key={i}>{lineItem}</li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExecSummary;
