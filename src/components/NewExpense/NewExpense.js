import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (entereedExpenseData) => {
      const expenseData = {
        ...entereedExpenseData,
        id: Math.random().toString()    
      };
      props.onAdExpense(expenseData);
  };

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
}

export default NewExpense;