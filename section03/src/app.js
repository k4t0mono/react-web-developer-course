/* app.js */

console.log('app.js engage');

var template = (
	<div>
		<h1>Indecision App</h1>
		<p>Some info</p>
	</div>
);

var keith = (
	<div>
		<h1>KatoMono Enkeli</h1>
		<p>Age: 20</p>
		<p>Location: Lavras, MG - Brasil</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(keith, appRoot);
