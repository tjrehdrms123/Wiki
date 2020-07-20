import React from 'react';
import Dongsub from '../components/dongsub';
const dong = () => {
	return (
		<div>
			<h2>dong</h2>
			
			<Dongsub />
			<Dongsub name="Lime" age="19">hi</Dongsub>
			<Dongsub name="Friends" age="20">world</Dongsub>
		</div>
	);
};

export default dong;