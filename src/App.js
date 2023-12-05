import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Records from "./records.json";

let DUMMY_EXPENSE = [];
const url = "http://localhost:8080/SF-FullStack-Backend/api";

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
 

  function fetchData() {
    console.log("Fetch data call");
    //setExpenses(Records);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpenses(data);
        console.log("fetch data set");
      });
  }

  useEffect(() => {
    //xyz();
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    console.log("addExpenseHandler call");
    console.log(expense);
    //const formdata = new FormData();
    //formdata.append("expense",expense);
    fetch(url, {
      
      method: "POST",
      body: JSON.stringify(expense),//formdata
      headers: {
        "content-Type": "application/json",
        "crossDomain" : true
      },
    }).then((response) => {
      setExpenses([expense, ...expenses]);
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
