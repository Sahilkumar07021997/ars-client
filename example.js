
import React from 'react';
import { VegaLite } from 'react-vega';

const chartSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Interactive KPI bar chart example.",
  "data": {
    "values": [
      {"year": "2022", "revenue": 300000},
      {"year": "2023", "revenue": 400000}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "year", "type": "ordinal", "title": "Year"},
    "y": {"field": "revenue", "type": "quantitative", "title": "Revenue ($)"}
  }
};

const KPIChart = () => <VegaLite spec={chartSpec} />;

export default KPIChart;