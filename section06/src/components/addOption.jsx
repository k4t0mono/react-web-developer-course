// AddOprion class

import React from 'react';


export default class AddOption extends React.Component {
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
