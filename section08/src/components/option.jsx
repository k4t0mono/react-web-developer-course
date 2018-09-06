// option class

import React from 'react';


const Option = (props) => (
	<div className='option'>
		<p class='option__text'>{ props.count }. { props.optionText }</p>
		<button
			className='button button--link'
			onClick={ (e) => props.handleDeleteOption(props.optionText) }
		>
			remove
		</button>
	</div>
);

export default Option;
