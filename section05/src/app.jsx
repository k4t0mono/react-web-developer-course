// app.jsx

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handelAddOption = this.handelAddOption.bind(this);

		this.state = { options: props.options };
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
		<div>{ props.optionText }</div>
	);
};


const Options = (props) => {
	return (
		<div>
			<button onClick={ props.handleDeleteOptions }>Remove All</button>

			{ props.options.map((op) => <Option key={ op } optionText={ op } />) }
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

//const User = (props) => {
	//return (
		//<div>
			//<p>Name: { props.name }</p>
			//<p>Age: { props.age }</p>
		//</div>
	//)
//};


ReactDOM.render(<IndecisionApp options={ ['aaa', 'bbb'] } />, document.getElementById('app'));
