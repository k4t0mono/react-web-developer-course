import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const add_expense = ({ description = '', note = '', amount = 0, created_at = 0 }) => ({
	type: 'add_expense',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		created_at,
	}
});

const remove_expense = ({ id } = {}) => ({
	type: 'remove_expense',
	id
});

const edit_expense = (id, updates) => ({
	type: 'edit_expense',
	id,
	updates
});

const expenses_reducer = (state = [], action) => {
	switch (action.type) {
	case 'add_expense':
		return [...state, action.expense];

	case 'remove_expense':
		return state.filter(({ id }) => id !== action.id );

	case 'edit_expense':
		return state.map((expense) => {
			if(expense.id == action.id)
				return {
					...expense,
					...action.updates,
				}

			return expense
		});

	default:
		return state;
	}
}


const set_text_filter = (text = '') => ({
	type: 'set_text_filter',
	text,
});

const sort_by_amount = () => ({
	type: 'sort_by_amount'
});

const sort_by_date = () => ({
	type: 'sort_by_date'
});

const set_start_date = (start_date) => ({
	type: 'set_start_date',
	start_date,
});

const set_end_date = (end_date) => ({
	type: 'set_end_date',
	end_date,
});

const filter_default_state = {
	text: '',
	sort_by: 'date',
	start_date: undefined,
	end_date: undefined,
}

const filter_reducer = (state = filter_default_state, action) => {
	switch(action.type) {
	case 'set_text_filter':
		return {
			...state,
			text: action.text,
		}

	case 'sort_by_amount':
		return {
			...state,
			sort_by: 'amount',
		}

	case 'set_start_date':
		return {
			...state,
			start_date: action.start_date,
		}

	case 'set_end_date':
		return {
			...state,
			end_date: action.end_date,
		}

	default:
		return state;
	}
}


const store = createStore(
	combineReducers({
		expenses: expenses_reducer,
		filter: filter_reducer,
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

/*
const e0 = store.dispatch(add_expense({ description: 'docinho', amount: 1 }));
const e1 = store.dispatch(add_expense({ description: 'caipirinha', amount: 11.5 }));

store.dispatch(remove_expense({ id: e0.expense.id }));
store.dispatch(edit_expense(e1.expense.id, { amount: 5 }));
store.dispatch(set_text_filter('asdf'));
store.dispatch(sort_by_amount());
*/

store.dispatch(set_start_date(123));
store.dispatch(set_end_date(153));

const demoState = {
	expenses: [{
		id: 'eWalmZg',
		description: 'Sethember rent',
		note: '????',
		amount: 43272,
		createAt: 0,
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	},
};
