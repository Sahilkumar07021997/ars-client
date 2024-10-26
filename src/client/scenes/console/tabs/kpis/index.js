import React, { useState } from "react";
import { useSelector } from "react-redux";
import DemoCharts from "./demo-charts/DemoCharts";
import ReusableButton from "../../../../components/button";
import ReusableDropdown from "../../../../components/drop-down";
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

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  return (
    <div className="kpis-container">
      <h2>
        {tabDisplay}:&nbsp;{selectedOption}
      </h2>
      <div className="exec-summary-container-toolbar">
        <ReusableDropdown
          options={YearOptions}
          onSelect={handleSelect}
          disabledText={"select year..."}
        />
        <ReusableButton buttonText="Load" width="auto" />
      </div>
      <DemoCharts />
    </div>
  );
};

export default Kpis;
