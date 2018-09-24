// All roads lead to Rome

import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import HomePage from '../components/HomePage.jsx';
import ItemList from '../components/ItemList.jsx';
import Item from '../components/Item.jsx';
import Contact from '../components/Contact.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Header from '../components/Header.jsx';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route
					path='/'
					component={ HomePage }
					exact={ true }
				/>

				<Route
					path='/portfolio'
					component={ ItemList }
					exact={ true }
				/>

				<Route
					path='/portfolio/:id'
					component={ Item }
				/>

				<Route
					path='/contact'
					component={ Contact }
				/>

				<Route
					component={ NotFoundPage }
				/>
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
