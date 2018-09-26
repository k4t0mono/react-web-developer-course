import { createStore } from 'redux';


const store = createStore((state = { count: 0 }, action) => {
	switch(action.type) {
		case 'INCREMENT':
			const increment = typeof action.amount === 'number' ? action.amount : 1;
			return { count: state.count + increment };

		case 'DECREMENT':
			const decrement = typeof action.amount === 'number' ? action.amount : 1;
			return { count: state.count - decrement };

		case 'SET':
			return { count: action.value };

		case 'RESET':
			return { count: 0 };

		default:
			return state;
	}
});

const unsubcribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT', amount: 5 });
//unsubcribe();
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'DECREMENT', amount: 10 });
store.dispatch({ type: 'SET', value: 621 });
