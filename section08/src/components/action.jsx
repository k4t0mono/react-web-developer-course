// Action class

import React from 'react';


const Action = (props) => (
	<div>
		<button onClick={ props.handlePick } disabled={ !props.hasOption }>
			What sould I do?
		</button>
	</div>
);


export default Action;
