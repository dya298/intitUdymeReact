import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  console.log(props);
  const dataPoinst = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  props.expense.forEach((element) => {
    const expenseMoth = element.date.getMonth();
    dataPoinst[expenseMoth].value += element.amount;
  });
  return (
    <div>
      <Chart dataPoints={dataPoinst} />
    </div>
  );
};

export default ExpenseChart;
