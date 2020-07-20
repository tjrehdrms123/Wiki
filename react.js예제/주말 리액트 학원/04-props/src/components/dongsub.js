import React from 'react';

const dongsub = ({name , age , children}) => {
	return (
		<div>
			<h3>DongSub</h3>
			<p>
				{name} {children} {age}
			</p>
		</div>
	);
};

dongsub.defaultProps = {
	name : '이름없음' , 
	age : '0세' 
};

export default dongsub;