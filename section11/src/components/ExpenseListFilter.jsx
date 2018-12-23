import React from 'react';
import { connect } from 'react-redux';

import {
	set_text_filter,
	sort_by_amount,
	sort_by_date
} from '../actions/filters.js';

const setFilter = (value, dispatch) => {

	if(value === 'date')
		dispatch(sort_by_date());
	else if(value === 'amount')
		dispatch(sort_by_amount());
	
};

const ExpenseListFilter = (props) => (
	<div>
		<input
			type='text'
			value={ props.filter.text }
			onChange={ (e) => {
				props.dispatch(set_text_filter(e.target.value));
			}}
		/>

		<select
			value={ props.filter.sort_by }
			onChange={ (e) => setFilter(e.target.value, props.dispatch) }
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
);

const mapStateProps = (state) => {
	return {
		filter: state.filter
	};
};

export default connect(mapStateProps)(ExpenseListFilter);
