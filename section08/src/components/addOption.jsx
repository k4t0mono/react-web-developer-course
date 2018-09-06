// AddOprion class

import React from 'react';


export default class AddOption extends React.Component {
	state = { error: undefined };

	onFormSubmit = (e) => {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handelAddOption(option);

		this.setState(() => { return { error }; });

		if(!error) { e.target.elements.option.value = ''; }
	}

	render() {
		return (
			<div>
				{ this.state.error && <p class='addOptionError'>{ this.state.error }</p> }
				<form className='addOption' onSubmit={ this.onFormSubmit }>
					<input className='addOption__input' type='text' name='option' autoComplete='off' />
					<button className='button'>Add Option</button>
				</form>
			</div>
		)
	}
}
