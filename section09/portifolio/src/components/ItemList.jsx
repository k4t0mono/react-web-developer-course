import React from 'react';
import { Link } from 'react-router-dom';


const ItemList = () => (
	<div>
		Stuff made by me:

		<ul>
			<li><Link to='/portfolio/1'>image-processing</Link></li>
			<li><Link to='/portfolio/2'>ruted-radio</Link></li>
			<li><Link to='/portfolio/3'>star-stone</Link></li>
		</ul>
	</div>
);


export default ItemList;
