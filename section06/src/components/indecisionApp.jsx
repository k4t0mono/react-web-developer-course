// IndecisionApp class

import React from 'react';

import AddOption from './addOption.jsx';
import Action from './action.jsx';
import Header from './header.jsx';
import Options from './options.jsx';

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handelAddOption = this.handelAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = { options: [] };
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


export default IndecisionApp;
