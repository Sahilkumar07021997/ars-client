import React, { useState } from "react";
import { useSelector } from "react-redux";
import DemoCharts from "./demo-charts/DemoCharts";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import LoaderSpinner from "../../../../components/loading-spinner";
import {
  YearOptions,
  MonthOptions,
  StatementOptions,
  DropDownType,
  StatementOptionName,
} from "../../../../../constants/tab-toolbar-constants";

/**
 * Kpis Component
 *
 * This component represents the Key Performance Indicators (KPIs) section of the ARS Artificial Intelligence Reporting System WebApp.
 * It renders the container with a heading for the KPIs.
 *
 * @param {Object} props - The props object for the component.
 * @returns {JSX.Element}
 */
const Kpis = (props) => {
  const { tabDisplay } = useSelector((state) => state.console);
  const [selectedOption, setSelectedOption] = useState({
    year: null,
    month: null,
    statementType: null,
  });
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadedYearMonth, setLoadedYearMonth] = useState({
    year: null,
    month: null,
    statementType: null,
  });
  const [data, setData] = useState(null);

  const handleSelect = (type, value) => {
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
        `http://localhost:8000/kpis/report`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            year: parseInt(selectedOption.year),
            month: MonthOptions.indexOf(selectedOption.month) + 1,
            // statementType: selectedOption.statementType,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  return (
    <div className="kpis-container">
      <h2>
        {tabDisplay.toUpperCase()}:&nbsp;
        {loadedYearMonth.month &&
        loadedYearMonth.year  ? (
          <span
            style={{ color: "#d1900f", fontWeight: "bold", fontSize: "1.2em" }}
          >
            {loadedYearMonth.month}&nbsp;
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
        {/* <ReusableDropdown
          options={StatementOptions}
          onSelect={(value) =>
            handleSelect(DropDownType.StatementOptionType, value)
          }
          disabledText={"Select Statement type..."}
        /> */}
        <ReusableButton
          buttonText="Load"
          width="auto"
          height="30px"
          disabled={
            !(
              selectedOption.year &&
              selectedOption.month
            )
          }
          onClick={onClickHandler}
        />
      </div>
      <div className="kpis-content">
        {loading ? (
          <LoaderSpinner />
        ) : loaded ? (
          <DemoCharts data={data} selectedOption={selectedOption} />
        ) : null}
      </div>
    </div>
  );
};

export default Kpis;
