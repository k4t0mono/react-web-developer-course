import React from 'react';


const Item = (props) => (
	<div>
		Portfolio item #{ props.match.params.id }.
	</div>
);


export default Item;
