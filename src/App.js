import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import { ExpenseAddNew } from "./components/NewExpense/ExpenseAddNew";
import NewExpense from "./components/NewExpense/NewExpense";
const items = [
  {
    id: 1,
    title: "Car Insence",
    amount: 254.12,
    date: new Date(2022, 2, 28),
  },
  {
    id: 2,
    title: "Car Insence1",
    amount: 254.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: 3,
    title: "Car Insence2",
    amount: 254.12,
    date: new Date(2019, 2, 28),
  },
  {
    id: 4,
    title: "Car Insence3",
    amount: 254.12,
    date: new Date(2022, 2, 28),
  },
];
function App() {
  const [intitData, setInitData] = useState(items);
  const [valueDate, setValue] = useState("2022");
  const [filterDate, setFilterDate] = useState(() => {
    const newDates = intitData.filter(
      (item) => item.date.getFullYear() === 2022
    );
    return newDates;
  });
  const [isAddItem, setIsAddItem] = useState(false);
  const date = (value) => {
    const newDates = intitData.filter(
      (item) => item.date.getFullYear().toString() === value
    );
    setFilterDate(newDates);
    setValue(value);
  };
  const onAddExpense = (expense) => {
    if (expense.date.getFullYear().toString() === valueDate) {
      setFilterDate((prev) => {
        return [expense, ...prev];
      });
    }
    setInitData([...intitData, expense]);
    setIsAddItem(false);
  };
  const onClickCancel = (value) => {
    if (value === 1) {
      setIsAddItem(false);
    }
  };
  const isAdd = (value) => {
    if (value) {
      setIsAddItem(true);
    }
  };
  return (
    <div>
      {isAddItem ? (
        <NewExpense onAddExp={onAddExpense} onClickCancel={onClickCancel} />
      ) : (
        <ExpenseAddNew onCickAdd={isAdd} />
      )}
      <Expense items={filterDate} date={date} />
    </div>
  );
}
export default App;
