import React from "react";
import { useSelector } from "react-redux";
import ReactVirtualizedTable from "../../../../components/table";
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
  return (
    tabDisplay && (
      <div className="income-statement-container">
        <h2>{tabDisplay}</h2>
        <ReactVirtualizedTable />
      </div>
    )
  );
};

export default IncomeStatement;
