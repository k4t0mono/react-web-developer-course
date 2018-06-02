// app.jsx

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handelAddOption = this.handelAddOption.bind(this);

		this.state = {
			options: []
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

	handelAddOption(option) {
		if(!option) { return 'Enter a valid value to add intem' }
		else if(this.state.options.includes(option)) { return 'This option already exits'; }

		this.setState((pv) => {
			return {
				options: pv.options.concat(option)
			}
		});
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

			<AddOption
				handelAddOption={ this.handelAddOption }
			/>
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
	constructor(props) {
		super(props);

		this.state = { error: undefined };

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();	

		const option = e.target.elements.option.value.trim();
		const error = this.props.handelAddOption(option);

		this.setState(() => { return { error }; });
	}

	render() {
		return (
			<div>
				{ this.state.error && <p>{ this.state.error }</p> }
				<form onSubmit={ this.onFormSubmit }>
					<input type='text' name='option'autoComplete='off' />
					<button>Add Option</button>
				</form>
			</div>
		)
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
