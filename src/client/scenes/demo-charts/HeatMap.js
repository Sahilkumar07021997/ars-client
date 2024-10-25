import React from "react";
import VegaLiteChart from "../../components/vega-lite";
import {HeatMapData } from "./chart-constants";

// const heatMapData = RandomHeatMapData([2023]);
// console.log(heatMapData);
const heatMapSpec = {
	title: "Daily Max Temperatures (C) in Seattle, WA 2012-15",
	config: { view: { strokeWidth: 0, step: 13 }, axis: { domain: false } },
	mark: "rect",
	encoding: {
		x: {
			field: "date",
			timeUnit: "date",
			type: "ordinal",
			title: "Day",
			axis: { labelAngle: 0, format: "%e" },
		},
		y: {
			field: "date",
			timeUnit: "month",
			type: "ordinal",
			title: "Month",
		},
		color: {
			field: "temp_max",
			aggregate: "max",
			type: "quantitative",
			scale: {
				range: ["darkblue", "lightblue", "orange", "red"],
			},
			legend: { title: "Temp" },
		},
		tooltip: [
			{
				field: "temp_max",
				aggregate: "max",
				type: "quantitative",
				title: "Max Temp (C)",
			},
			{
				field: "temp_min",
				aggregate: "min",
				type: "quantitative",
				title: "Min Temp (C)",
			},
			{
				field: "date",
				timeUnit: "date",
				type: "ordinal",
				title: "Day",
			},
			{
				field: "date",
				timeUnit: "month",
				type: "ordinal",
				title: "Month",
			},
		],
	},
};

const HeatMap = () => {
	return (
		<div className="heatmap">
			<h1>Heatmaps</h1>
			<div className="heatmap-container">
				<VegaLiteChart
					spec={heatMapSpec}
					data={HeatMapData}
					width={1000}
					height={500}
				/>
			</div>
		</div>
	);
};


export default HeatMap;
