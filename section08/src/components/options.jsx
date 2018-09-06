// Optins class

import React from 'react';

import Option from './option.jsx';


const Options = (props) => (
	<div>
		<div className='widgetHeader'>
			<h3 className='widgetHeader__title'>You Options</h3>
			<button
				className='button button--link'
				onClick={ props.handleDeleteOptions }
			>
				Remove All
			</button>
		</div>

		{ !props.options.length && <p className='widget__message'>Please add an option to start</p> }

		{ props.options.map((op) => (
			<Option
				key={ op }
				optionText={ op }
				handleDeleteOption={ props.handleDeleteOption }
			/>
		)) }
	</div>
);

export default Options;
