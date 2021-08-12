import React from 'react';
import './ExpensesFilter.css';

// this is an example of "ControlledComponent" as both the "value" as well as
// the "change to the value" are handled in its parent component
const ExpenseFilter = (props) => {

    const filterChangeHandler = (event) => {
        // console.log(event.target.value);
        props.onFilterChangeHandler(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedOption} onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;