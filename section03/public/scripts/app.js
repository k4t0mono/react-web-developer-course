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

var count = 0;

var addOne = function addOne() {
	console.log('addOne');
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var reset = function reset() {
	console.log('reset');
};

var countDOM = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne },
		'+1'
	),
	React.createElement(
		'button',
		{ onClick: minusOne },
		'-1'
	),
	React.createElement(
		'button',
		{ onClick: reset },
		'Reset'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(countDOM, appRoot);
