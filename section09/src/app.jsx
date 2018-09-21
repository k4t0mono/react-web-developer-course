// app.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
	<div>
		this is ExpenseDashboardPage.
	</div>
);

const AddExpensePage = () => (
	<div>
		This is AddExpensePage.
	</div>
);

const EditExpensePage = () => (
	<div>
		This is EditExpensePage.
	</div>
);

const HelpPage = () => (
	<div>
		This is HelpPage.
	</div>
);

const NotFoundPage = () => (
	<div>
		<p>404!</p>
		<p><Link to='/'>Go Home</Link></p>
	</div>
);

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to='/' activeClassName='isActive' exact={ true }>Home</NavLink>
		<NavLink to='/create' activeClassName='isActive'>Create</NavLink>
		<NavLink to='/edit' activeClassName='isActive'>Edit</NavLink>
		<NavLink to='/help' activeClassName='isActive'>Help</NavLink>
	</header>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route
					path='/'
					component={ ExpenseDashboardPage }
					exact={ true }
				/>

				<Route
					path='/create'
					component={ AddExpensePage }
				/>

				<Route
					path='/edit'
					component={ EditExpensePage }
				/>

				<Route
					path='/help'
					component={ HelpPage }
				/>

				<Route
					component={ NotFoundPage }
				/>
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
