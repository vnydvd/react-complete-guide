import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = (selectedOption) => {
    setSelectedYear(selectedOption);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selectedOption={selectedYear} onFilterChangeHandler={filterChangeHandler}></ExpenseFilter>
        <ul>
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          ></ExpenseItem>
        </ul>
      </Card>
    </div>
  );
};

export default Expenses;
