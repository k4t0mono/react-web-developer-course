'use strict';

/* app.js */

console.log('app.js engage');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'Some info'
	)
);

var keith = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'KatoMono Enkeli'
	),
	React.createElement(
		'p',
		null,
		'Age: 20'
	),
	React.createElement(
		'p',
		null,
		'Location: Lavras, MG - Brasil'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(keith, appRoot);
