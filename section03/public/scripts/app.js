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
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};

var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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

	ReactDOM.render(countDOM, appRoot);
};

renderCounterApp();
