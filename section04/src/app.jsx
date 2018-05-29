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
	handlePick() {
		alert('Testing');
	}

	render() {
		return (
			<div>
				<button onClick={ this.handlePick }>What sould I do?</button>
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


class Options extends React.Component {
	constructor(props) {
		super(props);

		this.removeAll = this.removeAll.bind(this);
	}

	removeAll() {
		alert(this.props.options);
	}

	render() {
		return (
			<div>
				<button onClick={ this.removeAll }>Remove All</button>

				{ this.props.options.map((op) => <Option key={ op } optionText={ op } />) }
			</div>
		);
	}
}


class AddOption extends React.Component {
	onFormSubmit(e) {
		e.preventDefault();	

		const option = e.target.elements.option.value.trim();
		if(!option) { return; }

		alert(`submit ${option}`);
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.onFormSubmit }>
					<input type='text' name='option' />
					<button>Add Option</button>
			</form>
			</div>
		)
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
