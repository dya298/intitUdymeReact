import React from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { ExpenseList } from "./ExpenseList";
import ExpenseChart from "../NewExpense/ExpenseChart";
export default function Expense(props) {
  const onGetDateItem = (value) => {
    props.date(value);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onGetDate={onGetDateItem} />
      <ExpenseChart expense={props.items} />
      <ExpenseList items={props.items} />
    </Card>
  );
}
