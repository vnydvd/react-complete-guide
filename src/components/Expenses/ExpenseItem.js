import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// this is an example of "Stateless" component as its only for representation of some data
// it doesn't modify any state
const ExpenseItem = (props) => {

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
  
  // const [title, setTitle] = useState(props.title); // must always be kept inside the main function body of a component

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // };

  return (

    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
