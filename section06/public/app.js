'use strict';

// I'm just a comment

console.log("FFF");

var visible = false;

var toggleText = function toggleText() {
	visible = !visible;

	render();
};

var render = function render() {

	var jsx = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Toggle APP'
		),
		React.createElement(
			'button',
			{ onClick: toggleText },
			visible ? 'Hide text' : 'Show text'
		),
		visible && React.createElement(
			'p',
			null,
			'I\'m visible now'
		)
	);

	ReactDOM.render(jsx, document.getElementById('app'));
};

render();
