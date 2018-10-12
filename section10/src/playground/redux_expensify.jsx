import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const add_expense = ({ description='', note='', amount=0, created_at=0 }) => ({
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

const expenses_reducer = (state = [], action) => {
	switch (action.type) {
		case 'add_expense':
			return [...state, action.expense];

		case 'remove_expense':
			return state.filter(({ id }) => id !== action.id );

		default:
			return state;
	}
}

const filter_default_state = {
	text: '',
	sort_by: 'date',
	start_date: undefined,
	end_date: undefined,
}

const filter_reducer = (state = filter_default_state, action) => {
	switch(action) {
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

const e0 = store.dispatch(add_expense({ description: 'docinho', amount: 1 }));
const e1 = store.dispatch(add_expense({ description: 'caipirinha', amount: 11.5 }));

console.log(e0.expense.id);
store.dispatch(remove_expense({ id: e0.expense.id }));

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
