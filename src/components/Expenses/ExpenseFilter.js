import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dateList = ["2022", "2021", "2020", "2019"];
  const onChangeDate = (e) => {
    props.onGetDate(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onChangeDate}>
          {dateList.map((date, index) => {
            return (
              <option key={index} value={date}>
                {date}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
