// Optins class

import React from 'react';

import Option from './option.jsx';


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

export default Options;
