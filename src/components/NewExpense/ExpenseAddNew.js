import React from "react";

export const ExpenseAddNew = (props) => {
  const onClickAddNew = () => {
    props.onCickAdd(1);
  };
  return (
    <div className="new-expense">
      <div className="new-button">
        <button type="submit" onClick={onClickAddNew}>
          Add new expense
        </button>
      </div>
    </div>
  );
};
