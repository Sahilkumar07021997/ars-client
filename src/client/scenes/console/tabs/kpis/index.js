import React from "react";
import { useSelector } from "react-redux";
import DemoCharts from "../../../demo-charts/DemoCharts";
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
  return (
    <div className="kpis-container">
      <h2>{tabDisplay}</h2>
      <DemoCharts />
    </div>
  );
};

export default Kpis;
