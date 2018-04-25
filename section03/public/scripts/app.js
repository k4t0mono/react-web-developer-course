'use strict';

/* app.js */

console.log('app.js engage');

var header = {
	title: 'Indecision App',
	subTitle: 'Some random info'
};

var headerDOM = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		header.title
	),
	React.createElement(
		'p',
		null,
		header.subTitle
	)
);

var user = {
	name: 'KatoMono',
	age: 20,
	location: 'Lavras, MG - Brazil'
};

var userDOM = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(headerDOM, appRoot);
