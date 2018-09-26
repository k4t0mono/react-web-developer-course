import { createStore, combineRedux } from 'redux';

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
