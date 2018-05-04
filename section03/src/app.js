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

const appRoot = document.getElementById('app');

const renderApp = () => {
	const appDOM = (
		<div>
			<h1>{ app.title }</h1>
			{ app.subTitle && <p>{ app.subTitle }</p> }

			<p>{ app.options.length ? 'Here are your options' : 'No options' }</p>
			<p>{ app.options.length }</p>

			<button onClick={ nukeOptions }>Nuke Options</button>
			
			<form onSubmit={ onFormSubmit }>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(appDOM, appRoot);
};

renderApp();
