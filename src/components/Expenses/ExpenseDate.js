import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date
    ? props.date.toLocaleString("en-US", { month: "long" })
    : "01";
  const day = props.date
    ? props.date.toLocaleString("en-US", { day: "2-digit" })
    : "01";
  const year = props.date ? props.date.getFullYear() : "2022";
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
