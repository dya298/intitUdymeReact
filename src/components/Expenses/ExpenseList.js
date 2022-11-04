import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
export const ExpenseList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">No expense found.</h2>
      ) : (
        props.items.map((item, index) => (
          <div key={index}>
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          </div>
        ))
      )}
    </ul>
  );
};
