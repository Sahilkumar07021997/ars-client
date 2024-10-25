import React from "react";
import VegaLiteChart from "../../components/vega-lite";
import {
  barData,
  lineData,
  multiBarData,
  multiLineData,
} from "./chart-constants";

const barChartSpec = {
  mark: "bar",
  encoding: {
    x: { field: "category", type: "ordinal", axis: { labelAngle: 0 } },
    y: { field: "value", type: "quantitative" },
  },
};

const lineChartSpec = {
  mark: "line",
  encoding: {
    x: { field: "date", type: "temporal" },
    y: { field: "value", type: "quantitative" },
  },
};

const multiLineChartSpec = {
  layer: [
    {
      encoding: {
        x: { field: "date", type: "temporal" },
        y: { field: "price", type: "quantitative" },
        color: { field: "symbol", type: "nominal" },
      },
      layer: [
        { mark: "line" },
        {
          params: [
            {
              name: "label",
              select: {
                type: "point",
                encodings: ["x"],
                nearest: true,
                on: "pointerover",
              },
            },
          ],
          mark: "point",
          encoding: {
            opacity: {
              condition: {
                param: "label",
                empty: false,
                value: 1,
              },
              value: 0,
            },
          },
        },
      ],
    },
    {
      transform: [{ filter: { param: "label", empty: false } }],
      layer: [
        {
          mark: { type: "rule", color: "gray" },
          encoding: {
            x: { type: "temporal", field: "date", aggregate: "min" },
          },
        },
        {
          encoding: {
            text: { type: "quantitative", field: "price" },
            x: { type: "temporal", field: "date" },
            y: { type: "quantitative", field: "price" },
          },
          layer: [
            {
              mark: {
                type: "text",
                stroke: "white",
                strokeWidth: 2,
                align: "left",
                dx: 5,
                dy: -5,
              },
            },
            {
              mark: { type: "text", align: "left", dx: 5, dy: -5 },
              encoding: {
                color: { type: "nominal", field: "symbol" },
              },
            },
          ],
        },
      ],
    },
  ],
};

const multiBarChartSpec = {
  mark: "bar",
  encoding: {
    y: { aggregate: "sum", field: "yield" },
    x: { field: "variety" },
    color: { field: "site" },
  },
};

const DemoCharts = () => {
  return (
    <div className="demo-charts-grid">
      <div className="demo-charts-item">
        <h2 className="demo-charts-item-header">Bar Chart</h2>
        <VegaLiteChart spec={barChartSpec} data={barData} width={400} />
      </div>
      <div className="demo-charts-item">
        <h2 className="demo-charts-item-header">Line Chart</h2>
        <VegaLiteChart spec={lineChartSpec} data={lineData} width={400} />
      </div>
      <div className="demo-charts-item">
        <h2 className="demo-charts-item-header">Multi Bar Chart</h2>
        <VegaLiteChart
          spec={multiBarChartSpec}
          data={multiBarData}
          width={400}
        />
      </div>
      <div className="demo-charts-item">
        <h2 className="demo-charts-item-header">
          Interactive Multi Line Chart
        </h2>
        <VegaLiteChart
          spec={multiLineChartSpec}
          data={multiLineData}
          width={400}
        />
      </div>
    </div>
  );
};

export default DemoCharts;