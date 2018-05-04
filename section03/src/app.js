/* app.js */

console.log('app.js engage');

const header = {
	title: 'Indecision App',
	subTitle: 'Some random info',
	options: ['One', 'Two']
};

const headerDOM = (
	<div>
		<h1>{ header.title }</h1>
		{ header.subTitle && <p>{ header.subTitle }</p> }
		<p>{ header.options ? 'I have some options' : 'No options' }</p>
	</div>
);

let count = 0;

const addOne = () => {
	count++;
	renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const countDOM = (
		<div>
			<h1>Count: { count }</h1>
			<button onClick={ addOne }>+1</button>
			<button onClick={ minusOne }>-1</button>
			<button onClick={ reset }>Reset</button>
		</div>
	);

	ReactDOM.render(countDOM, appRoot);
};

renderCounterApp();
