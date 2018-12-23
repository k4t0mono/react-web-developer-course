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


const store = ConfigStore();
store.dispatch(add_expense({ description: 'Vodka bb', amount: 6.59 }));
store.dispatch(add_expense({ description: 'Caramelo bb', created_at: 345 }));
store.dispatch(add_expense({ description: 'Dadinho dd', amount: 10.53 }));

const jsx = (
	<Provider store={ store }>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
