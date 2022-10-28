import React from "react";
import "../components/Expense.css";
import Card from "./Card";
import ExpenseItem from "./ExpanseItem.js";
export default function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
}
