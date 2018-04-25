/* app.js */

console.log('app.js engage');

var header = {
	title: 'Indecision App',
	subTitle: 'Some random info'
};

var headerDOM = (
	<div>
		<h1>{ header.title }</h1>
		<p>{ header.subTitle }</p>
	</div>
);

var user = {
	name: 'KatoMono',
	age: 20,
	location: 'Lavras, MG - Brazil'
};

var userDOM = (
	<div>
		<h1>{ user.name }</h1>
		<p>Age: { user.age }</p>
		<p>Location: { user.location }</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(headerDOM, appRoot);
