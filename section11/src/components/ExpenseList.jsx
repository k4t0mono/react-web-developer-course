import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
    <div>
        <h2>ExpenseList</h2>
        { props.filter.text }
        { props.expenses.length }
    </div>
);

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        expenses: state.expenses,
        filter: state.filter,
    }
} 

const ConnectedExpenseList = connect(mapStatetoProps)(ExpenseList);

export default ConnectedExpenseList;