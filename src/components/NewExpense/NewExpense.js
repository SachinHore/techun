import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{

        const expenseData = {
            id:Math.trunc(Math.random()*10000),
            ...enteredExpenseData
            
        }

        props.onAddExpense(expenseData);


        //console.log(expenseData);

    }

    return(
        <div className="new-expense">

            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>

        </div>
    );

}

export default NewExpense;