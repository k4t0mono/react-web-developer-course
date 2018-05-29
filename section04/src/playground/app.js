/* app.js */

console.log('app.js engage');

const app = {
	title: 'Indecision App',
	subTitle: 'Some random info',
	options: []
};


const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if(!option) return;
	
	app.options.push(option);
	e.target.elements.option.values = '';

	renderApp();
};

const nukeOptions = () => {
	app.options = [];

	renderApp();
};

const onMakeDecision = () => {
	const index = Math.floor(Math.random() * app.options.length);
	const op = app.options[index];

	alert(op);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
	const appDOM = (
		<div>
			<h1>{ app.title }</h1>
			{ app.subTitle && <p>{ app.subTitle }</p> }

			<p>{ app.options.length ? 'Here are your options' : 'No options' }</p>

			<button onClick={ onMakeDecision } disabled={ app.options.length === 0 }>What should I do?</button>
			<button onClick={ nukeOptions }>Nuke Options</button>

			<ol>
				{ app.options.map((op) => <li key={ op }>{ op }</li>) }
			</ol>

			<form onSubmit={ onFormSubmit }>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(appDOM, appRoot);
};

renderApp();
