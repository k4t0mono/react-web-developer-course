// app.jsx

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.jsx';


ReactDOM.render(<AppRouter />, document.getElementById('app'));
