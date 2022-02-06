import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpences = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilteredYear={filteredChangeHandler}
        />
        {filteredExpences.length === 0 && <p>No expenses found.</p>}
        {filteredExpences.length > 0 &&
          filteredExpences.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
