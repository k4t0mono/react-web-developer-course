// app.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.jsx';
import ConfigStore from './store/configStore';
import { add_expense } from './actions/expenses';
import { set_text_filter } from './actions/filters';
import get_visible_expenses from './selectors/expenses';


const store = ConfigStore();
store.dispatch(add_expense({ description: 'Caipirnha', amount: 6.59, created_at: 1545508445 }));
store.dispatch(add_expense({ description: 'rent' }));
store.dispatch(set_text_filter('asds'));

setTimeout(() => {
    store.dispatch(set_text_filter('rent'));
}, 3000);

const state = store.getState();
const visible = get_visible_expenses(state.expenses, state.filter);
console.log(visible);

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
