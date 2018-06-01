// app.jsx

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);

		this.state = {
			options: ['Asoka', 'Ashoka', 'Soka']
		};
	}

	handleDeleteOptions() {
		this.setState(() => {
			return { options: [] };
		});
	}

	handlePick() {
		const i = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[i];

		alert(option);
	}
	
	render() {
		const title = "Indecision";
		const subtitle = "Put your life in the hands of a computer";

		return (
			<div>
				<Header title={ title } subtitle={ subtitle } />

				<Action
					hasOption={ this.state.options.length > 0 }
					handlePick={ this.handlePick }
				/>

				<Options
					options={ this.state.options }
					handleDeleteOptions={ this.handleDeleteOptions }
				/>

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
				<button onClick={ this.props.handlePick } disabled={ !this.props.hasOption }>
					What sould I do?
				</button>
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
	render() {
		return (
			<div>
				<button onClick={ this.props.handleDeleteOptions }>Remove All</button>

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
