import React from 'react';
import { connect } from 'react-redux';

import { set_text_filter } from '../actions/filters.js';

const ExpenseListFilter = (props) => (
	<div>
		<input type='text' value={ props.filter.text } onChange={ (e) => {
			props.dispatch(set_text_filter(e.target.value));
		}} />
	</div>
);

const mapStateProps = (state) => {
	return {
		filter: state.filter
	};
};

export default connect(mapStateProps)(ExpenseListFilter);
