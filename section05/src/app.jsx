// app.jsx

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handelAddOption = this.handelAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = { options: props.options };
	}

	handleDeleteOptions() {
		this.setState(() => {
			return { options: [] };
		});
	}

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'))
			if(!options) { return; }

			this.setState(() => ({ options }));

		} catch(e) {
			console.log(e)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length != this.state.options.length) {
			localStorage.setItem('options', JSON.stringify(this.state.options));
		}
	}

	handleDeleteOption(option) {
		this.setState((ps) => {
			return { options: ps.options.filter((op) => op !== option) }
		})
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
			return { options: pv.options.concat(option) }
		});
	}
	
	render() {
		const subtitle = "Put your life in the hands of a computer";

		return (
			<div>
				<Header subtitle={ subtitle } />

				<Action
					hasOption={ this.state.options.length > 0 }
					handlePick={ this.handlePick }
				/>

				<Options
					options={ this.state.options }
					handleDeleteOptions={ this.handleDeleteOptions }
					handleDeleteOption={ this.handleDeleteOption }
				/>

				<AddOption
					handelAddOption={ this.handelAddOption }
				/>
			</div>
		)
	}
}

IndecisionApp.defaultProps = {
	options: []
};


const Header = (props) => {
	return (
		<div>
			<h1>{ props.title }</h1>
			{ props.subtitle && <h2>{ props.subtitle }</h2> }	
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision',
};


const Action = (props) => {
	return (
		<div>
			<button onClick={ props.handlePick } disabled={ !props.hasOption }>
				What sould I do?
			</button>
		</div>
	);
};


const Option = (props) => {
	return (
		<div>
			{ props.optionText }
			<button onClick={ (e) => props.handleDeleteOption(props.optionText) }>
				remove
			</button>
		</div>
	);
};


const Options = (props) => {
	return (
		<div>
			<button onClick={ props.handleDeleteOptions }>Remove All</button>
			{ !props.options.length && <p>Please add an option to start</p> }

			{ props.options.map((op) => (
				<Option
					key={ op }
					optionText={ op }
					handleDeleteOption={ props.handleDeleteOption } 
				/>
			)) }
		</div>
	);
};


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

		if(!error) { e.target.elements.option.value = ''; }
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
