import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function fetchData() {
    fetch("https://techgun.website/sample/api/read.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setExpenses(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch(
      "https://techgun.website/sample/api/create.php",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "content-Type": "application/json",
        },
      }.then((response) => {
        fetchData();
      })
    );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
