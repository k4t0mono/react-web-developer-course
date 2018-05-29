// I'm just a comment

console.log("FFF");

let visible = false;

const toggleText = () => {
	visible = !visible;

	render();
}

const render = () => {

	const jsx = (
		<div>
			<h1>Toggle APP</h1>
			<button onClick={ toggleText }>
				{ visible ? 'Hide text' : 'Show text' }
			</button>
			{ visible && ( <p>I'm visible now</p> ) }
		</div>
	);
	
	ReactDOM.render(jsx, document.getElementById('app'));
};

render();
