import Expense from "./components/Expense";

function App() {
  const items = [
    {
      id: 1,
      title: "Car Insence",
      amount: 254.12,
      date: new Date(2022, 2, 28),
    },
  ];
  return (
    <div>
      <Expense items={items} />
    </div>
  );
}
export default App;
