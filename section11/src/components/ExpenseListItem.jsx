import React from 'react';
import { connect } from 'react-redux';

import { remove_expense }  from '../actions/expenses.js';


const ExpenseListItem = ({ description, amount, created_at, id, dispatch }) => (
	<div>
		<h3>{ description }</h3>
		<p>{ amount } -- { created_at }</p>
		<button onClick={ () => dispatch(remove_expense({ id })) }>
			Remove
		</button>
	</div>
);

export default connect()(ExpenseListItem);
