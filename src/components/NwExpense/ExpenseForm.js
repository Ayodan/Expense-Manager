import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');
   
    const titleEventHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }

    const amountEventHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateEventHandler = (event) =>{
        setEnteredDate(event.target.value)
    }

    const submitEventHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: EnteredDate
        }
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
    <form onSubmit = {submitEventHandler}>
        <div className = 'new-expense__controls'>
            <div className = 'new-expense__controls'>
                <label>Title</label>
                <input type='text'  value= {EnteredTitle} onChange = {titleEventHandler} />
            </div>
            <div className = 'new-expense__controls'>
                <label>Amount</label>
                <input type='number' min= "0.01" step = "0.01" value= {EnteredAmount} onChange = {amountEventHandler} />
            </div>
            <div className = 'new-expense__controls'>
                <label>Date</label>
                <input type='date' min = "2019-01-01" max= "2022-12-31" value = {EnteredDate} onChange = {dateEventHandler} />
            </div>
        </div>
        <div className = 'new-expense__actions'>
                <button type='submit'>Add Expense</button>
        </div>
    </form>
    )

}
export default ExpenseForm;