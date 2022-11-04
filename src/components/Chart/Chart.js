import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPoints = props.dataPoints.map((expense) => expense.value);
  const maxValue = Math.max(...dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
