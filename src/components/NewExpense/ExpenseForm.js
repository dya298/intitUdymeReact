import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const initDate = {
    title: "",
    amount: "",
    date: new Date(),
  };
  const [inputForm, setInputForm] = useState(initDate);
  const onChangeForm = (e, type) => {
    setInputForm((prevInputForm) => {
      return {
        ...prevInputForm,
        [type]: type === "date" ? new Date(e.target.value) : e.target.value,
      };
    });
  };
  const onClickForm = (e) => {
    e.preventDefault();
    props.inputData(inputForm);
  };
  const onClickCancel = (e) => {
    e.preventDefault();
    props.onClickCancel(1);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => {
              onChangeForm(e, "title");
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => {
              onChangeForm(e, "amount");
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => {
              onChangeForm(e, "date");
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={onClickForm}>
          Add expense
        </button>
        <button type="submit" onClick={onClickCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
