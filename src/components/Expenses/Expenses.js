import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';

const Expenses = (props) =>{
    let expenses = props.item;
    return(
        <div>
            
        <Card className="expenses">

            {
                props.item.map(
                    expense =>(
                        <ExpenseItem 
                            date={expense.date} 
                            title={expense.title} 
                            amount={expense.amount} />
                    )
                )
            }
            
             
        </Card>
        </div>
    );

}

export default Expenses;