'use strict';

/* app.js */

console.log('app.js engage');

var header = {
	title: 'Indecision App',
	subTitle: 'Some random info',
	options: ['One', 'Two']
};

var headerDOM = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		header.title
	),
	header.subTitle && React.createElement(
		'p',
		null,
		header.subTitle
	),
	React.createElement(
		'p',
		null,
		header.options ? 'I have some options' : 'No options'
	)
);

var user = {
	name: 'KatoMono',
	age: 20,
	location: 'Lavras, MG - Brazil'
};

var getLocation = function getLocation(loc) {
	if (loc) return React.createElement(
		'p',
		null,
		'Location: ',
		loc
	);
};

var userDOM = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymus'
	),
	user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(headerDOM, appRoot);
