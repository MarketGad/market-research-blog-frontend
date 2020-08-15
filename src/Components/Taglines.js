import React from 'react';

const Taglines = () => {
	return (
		<div className='newPost' style={{ backgroundColor: '#0153a5' }}>
			<div className='row'>
				<div className='col s12 center' style={{ padding: '15px' }}>
					<div className='tagline1'>59% of the startups fail due to lack of Market Research</div>
					<div className='tagline1'>The difference is: Will you do something about it?</div>
				</div>
			</div>
			<div className='row'>
				<div className='col s12 center' style={{ padding: '5px' }}>
					<div className='tagline2'>Apple, Amazon, Disney & Google all started from a single garage</div>
					<div className='tagline2'>Each one of us will have a billion-dollar idea at some point</div>
				</div>
			</div>
			<a
					
				href='/whatwedo'
			>
				<img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597527567/Icon_lsc5dl.png" style={{height: '14rem', width: '14rem' , marginBottom:'-3rem', marginTop:'-3rem'}}></img>
			</a>
		</div>
	);
};

export default Taglines;
