import React, { useState } from "react";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList items={filteredExpences} />
      </Card>
    </div>
  );
};

export default Expenses;
