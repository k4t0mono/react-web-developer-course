'use strict';

/* app.js */

console.log('app.js engage');

var app = {
	title: 'Indecision App',
	subTitle: 'Some random info',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;
	if (!option) return;

	app.options.push(option);
	e.target.elements.option.values = '';

	renderApp();
};

var nukeOptions = function nukeOptions() {
	app.options = [];

	renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
	var appDOM = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subTitle && React.createElement(
			'p',
			null,
			app.subTitle
		),
		React.createElement(
			'p',
			null,
			app.options.length ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: nukeOptions },
			'Nuke Options'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (op) {
				return React.createElement(
					'li',
					{ key: op },
					op
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(appDOM, appRoot);
};

renderApp();
