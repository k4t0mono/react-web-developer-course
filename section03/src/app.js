/* app.js */

console.log('app.js engage');

var header = {
	title: 'Indecision App',
	subTitle: 'Some random info',
	options: ['One', 'Two']
};

var headerDOM = (
	<div>
		<h1>{ header.title }</h1>
		{ header.subTitle && <p>{ header.subTitle }</p> }
		<p>{ header.options ? 'I have some options' : 'No options' }</p>
	</div>
);

var user = {
	name: 'KatoMono',
	age: 20,
	location: 'Lavras, MG - Brazil'
};

var getLocation = (loc) => {
	if(loc)
		return <p>Location: { loc }</p>;
};

var userDOM = (
	<div>
		<h1>{ user.name ? user.name : 'Anonymus' }</h1>
		{ user.age >= 18 &&  <p>Age: { user.age }</p> }
		{ getLocation(user.location) }
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(headerDOM, appRoot);
