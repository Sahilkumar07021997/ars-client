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
      setData(data);
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
            <h1>Executive Summary & Analysis</h1>
            <hr/>
            <div>
              <h2>Revenue Section</h2>
              <div>
                <h3>Total Commercial Revenues</h3>
                <p>
                  <strong>Value:</strong> $984,574.80
                </p>
                <p>
                  <strong>Analysis:</strong> This line item is the sum of
                  commercial revenues derived from multiple sources, such as
                  Electronic Services, Research Tools, Research Services, and
                  more. The high figure indicates a strong reliance on research
                  and consulting services.
                </p>
              </div>
              <div>
                <h3>Total Intercompany Revenues</h3>
                <p>
                  <strong>Value:</strong> $141,400.00
                </p>
                <p>
                  <strong>Analysis:</strong> This includes revenues from
                  internal transactions, reflecting the value of internal
                  services or tools shared between entities, reducing overall
                  costs for resources.
                </p>
              </div>
              <div>
                <h3>Total Revenues</h3>
                <p>
                  <strong>Value:</strong> $1,125,974.80
                </p>
                <p>
                  <strong>Analysis:</strong> Total revenues combine commercial
                  and intercompany revenues, showing the firm’s overall revenue
                  generation, driven by external clients and internal
                  collaborations.
                </p>
              </div>
            </div>

            {/* Compensation Expenses Section */}
            <div>
              <h2>Compensation Expenses Section</h2>
              <div>
                <h3>Total Compensation Expenses</h3>
                <p>
                  <strong>Value:</strong> $706,685.50
                </p>
                <p>
                  <strong>Analysis:</strong> This figure represents the cost of
                  salaries, wages, and other compensatory benefits. Major costs
                  arise from Research Sales and Institutional Client Service,
                  indicating a focus on retaining skilled professionals in
                  critical roles.
                </p>
              </div>
            </div>

            {/* Direct Expenses Section */}
            <div>
              <h2>Direct Expenses Section</h2>
              <div>
                <h3>Total Direct Expenses</h3>
                <p>
                  <strong>Value:</strong> $465,802.86
                </p>
                <p>
                  <strong>Analysis:</strong> These expenses include direct costs
                  related to specific operational activities, ensuring
                  comprehensive service delivery. IT and research expenses are
                  notable, aligning with the company’s tech and data-oriented
                  services.
                </p>
              </div>
            </div>

            {/* Indirect Expenses Section */}
            <div>
              <h2>Indirect Expenses Section</h2>
              <div>
                <h3>Total Indirect Expenses</h3>
                <p>
                  <strong>Value:</strong> $294,503.65
                </p>
                <p>
                  <strong>Analysis:</strong> Indirect expenses include costs
                  essential for maintaining infrastructure, especially in data
                  management, which supports customer-facing services.
                </p>
              </div>
            </div>

            {/* Project Costs Section */}
            <div>
              <h2>Project Costs Section</h2>
              <div>
                <h3>Total Project Costs</h3>
                <p>
                  <strong>Value:</strong> $104,198.10
                </p>
                <p>
                  <strong>Analysis:</strong> Project costs reflect investment in
                  secure, project-specific technology infrastructure, with
                  cybersecurity spending indicating a focus on data protection.
                </p>
              </div>
            </div>

            {/* EBITDA Section */}
            <div>
              <h2>EBITDA Section</h2>
              <div>
                <h3>
                  EBITDA before Shared and Non-Operating Expenses and Excluded
                  Items
                </h3>
                <p>
                  <strong>Value:</strong> -$445,215.31
                </p>
                <p>
                  <strong>Analysis:</strong> A negative EBITDA suggests
                  profitability challenges, pointing to the need for cost
                  management or expanded high-margin revenue streams to improve
                  cash flow.
                </p>
              </div>
            </div>

            {/* Interest, Taxes, Depreciation, and Amortization Section */}
            <div>
              <h2>Interest, Taxes, Depreciation, and Amortization Section</h2>
              <div>
                <h3>Depreciation & Amortization</h3>
                <p>
                  <strong>Value:</strong> $7,517.29
                </p>
                <p>
                  <strong>Analysis:</strong> This relatively modest figure
                  suggests limited asset-heavy investments, indicating a
                  service-oriented focus rather than reliance on physical
                  assets.
                </p>
              </div>
            </div>

            {/* Income Before Items Section */}
            <div>
              <h2>Income Before Items Section</h2>
              <div>
                <h3>
                  Net Income/(Loss) before Shared and Non-Operating Expenses and
                  Excluded Items
                </h3>
                <p>
                  <strong>Value:</strong> -$452,732.60
                </p>
                <p>
                  <strong>Analysis:</strong> The net income before special
                  adjustments reveals a loss. This may require revenue margin
                  increases, cost-cutting, or restructuring to improve
                  profitability.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div>
              <h2>Conclusion</h2>
              <p>
                While the organization generates significant revenue, especially
                from commercial activities, the expenses result in a negative
                EBITDA and net income. Optimizing revenue-generating services,
                reducing expenses, and enhancing operational efficiencies could
                improve financial outcomes and move the company toward
                profitability.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExecSummary;
