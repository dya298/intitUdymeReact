import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpensedataHandler = (data) => {
    const expenseData = {
      ...data,
    };
    props.onAddExp(expenseData);
  };
  const onClickCancel = (value) => {
    props.onClickCancel(value);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        inputData={saveExpensedataHandler}
        onClickCancel={onClickCancel}
      />
    </div>
  );
}
