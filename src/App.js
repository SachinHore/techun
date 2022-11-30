import React, {useState,useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    
];


const App = () =>{

    const[expenses, setExpenses] = useState(DUMMY_EXPENSE);

    useEffect(()=>{
        fetch('http://localhost/sample-api/read.php').then(
            response=>{
                return response.json();
            }

        ).then(
            data=>{
                console.log(data);
                setExpenses(data);
            }
        )

    },[]);

    

    const addExpenseHandler=(expense) =>{
        const updatedExpense = [expense, ...expenses]
        setExpenses(updatedExpense);
        console.log(expense);
    }

    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses item={expenses}></Expenses>
        </div>
        
    );
}
 
export default App;