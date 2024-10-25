import React from "react";
import { useSelector } from "react-redux";
import ReactVirtualizedTable from "../../../../components/table";
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
  return (
    <div className="balancesheet-container">
      <h2>{tabDisplay}</h2>
      <ReactVirtualizedTable />
    </div>
  );
};

export default Balancesheet;
