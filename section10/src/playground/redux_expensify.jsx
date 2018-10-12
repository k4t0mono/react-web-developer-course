import { createStore, combineReducers } from 'redux';


const expenses_reducer = (state = [], action) => {
	switch (action.type) {
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

console.log(store.getState());

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
