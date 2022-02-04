import React from 'react';
import Card from '../UI/Card';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let title = props.title;
  const clickHndler = () => {
    title = "Updated!";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHndler}>chang title</button>
    </Card>
  );
};

export default ExpenseItem;
