import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');

const [userInput, setUserInput ] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',

})


  const titleChangehandelr = (event) => {
    setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
    });
  }

  const amountChangehandelr = (event) => {
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
    });
  }

  const dateChangehandelr = (event) => {
    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    });
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangehandelr}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangehandelr} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2022.12.12" onChange={dateChangehandelr}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
