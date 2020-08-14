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
			<button
				className='btn-large waves-effect waves-light'
				style={{
					fontFamily: 'GlacialIndifferenceBold',
					backgroundColor: 'white',
					color: '#0153a5',
					borderRadius: '10px',
					fontSize: '1.3em',
					marginBottom: '20px',
					mozBoxShadow: '0 0 10px 5px ',
					webkitBoxShadow: '0 0 10px 5px',
					boxShadow: '0 0 10px 5px '
				}}
			>
				Join Now
			</button>
		</div>
	);
};

export default Taglines;
