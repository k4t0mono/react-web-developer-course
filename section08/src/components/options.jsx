// Optins class

import React from 'react';

import Option from './option.jsx';


const Options = (props) => (
	<div>
		<button
			className='button button--link'
			onClick={ props.handleDeleteOptions }
		>
			Remove All
		</button>
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

export default Options;
