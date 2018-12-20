import { createStore, combineReducers } from 'redux';
import expenses_reducer from '../reducers/expenses';
import filter_reducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenses_reducer,
            filter: filter_reducer,
        })
    );

    return store;
}