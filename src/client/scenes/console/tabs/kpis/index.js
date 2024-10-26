import React, { useState } from "react";
import { useSelector } from "react-redux";
import DemoCharts from "./demo-charts/DemoCharts";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
import LoaderSpinner from "../../../../components/loading-spinner";
import { YearOptions } from "../../../../../constants/tab-toolbar-constants";

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
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadedYear, setLoadedYear] = useState(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
    setLoaded(false); // Reset loaded state if a new selection is made
  };

  const onClickHandler = () => {
    setLoadedYear(selectedOption);
    setLoading(true);
    setLoaded(false); // Reset loaded state when loading starts
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 3000); // Simulate loading time
  };

  return (
    <div className="kpis-container">
      <h2>
        {tabDisplay.toUpperCase()}:&nbsp;
        {loadedYear ? (
          loadedYear
        ) : (
          <span
            style={{ color: "gray", fontStyle: "italic", fontSize: "0.9em" }}
          >
            Please select a year and load!
          </span>
        )}
      </h2>
      <div className="container-toolbar">
        <ReusableDropdown
          options={YearOptions}
          onSelect={handleSelect}
          disabledText={"Select year..."}
        />
        <ReusableButton
          buttonText="Load"
          width="auto"
          height="30px"
          disabled={!selectedOption}
          onClick={onClickHandler}
        />
      </div>
      <div className="kpis-content">
        {loading ? <LoaderSpinner /> : loaded ? <DemoCharts /> : null}
      </div>
    </div>
  );
};

export default Kpis;
