import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm.jsx';
import { add_expense } from '../actions/expenses';


const AddExpensePage = (props) => (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm
			onSubmit={ (expense) => {
				props.dispatch(add_expense(expense));
				props.history.push('/');
			} }
		/>
	</div>
);


export default connect()(AddExpensePage);
