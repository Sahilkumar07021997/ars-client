import React from "react";
import { VegaLite } from "react-vega";
/**
 * VegaLiteChart component
 * 
 * @param {Object} spec - The Vega-Lite specification for the chart.
 * @param {Array} data - The data to be visualized in the chart.
 * @param {number} [width=300] - Optional. The width of the chart (default is 400px).
 * @param {number} [height=200] - Optional. The height of the chart (default is 400px).
 * 
 * @returns {JSX.Element} The rendered VegaLite chart reusable component.
 */
const VegaLiteChart = ({ spec, data, width = 300, height = 200 }) => {
	const chartSpec = { ...spec, data: { values: data } };
	return <VegaLite spec={chartSpec} width={width} height={height} actions={false} />;
};

export default VegaLiteChart;
