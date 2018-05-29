// app.jsx

class IndecisionApp extends React.Component {
	render() {
		const title = "Indecision";
		const subtitle = "Put your life in the hands of a computer";
		let options = ['Asoka', 'Ashoka', 'Soka'];

		return (
			<div>
				<Header title={ title } subtitle={ subtitle } />
				<Action />
				<Options options={ options } />
				<AddOption />
			</div>
		)
	}
}


class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<h2>{ this.props.subtitle }</h2>
			</div>
		);
	}
}


class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What sould I do?</button>
			</div>
		);
	}
}


class Option extends React.Component {
	render() {
		return (
			<div>
				{ this.props.optionText }
			</div>
		);
	}
}


//{ app.options.map((op) => <li key={ op }>{ op }</li>) }
class Options extends React.Component {
	render() {
		return (
			<div>
				Size: { this.props.options.length }
				{ this.props.options.map((op) => <Option key={ op } optionText={ op } />) }
			</div>
		);
	}
}


class AddOption extends React.Component {
	render() {
		return (
			<div>
				AddOption Component
			</div>
		)
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
