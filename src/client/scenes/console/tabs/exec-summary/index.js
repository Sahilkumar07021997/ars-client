import React from "react";
import { useSelector } from "react-redux";
import ReusableButton from "../../../../components/button";
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
  return (
    <div className="exec-summary-container">
      <h2>{tabDisplay}</h2>
      <ReusableButton buttonText="Generate" width="auto" />
    </div>
  );
};

export default ExecSummary;
