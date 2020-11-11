import React from 'react';
import Industry from './Industry';
import Startup from './Startup';
import VentureHack from './VentureHack';

export default function Research () {
	const [ tabValue, setTabvalue ] = React.useState('industry');
	const show = () => {
		if (tabValue === 'industry') {
			return <Industry />;
		} else if (tabValue === 'startup') {
			return <Startup />;
		} else if (tabValue === 'venture') {
			return <VentureHack />;
		} else return <div />;
	};
	return (
		<div style={{ backgroundColor: 'rgb(240,240,240)' }}>
			<div style={{ marginBottom: '-5px' }}>
				<img
					src=' https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605090786/Theme/research_cover_aaerov.jpg'
					width='100%'
				/>
			</div>
			<div style={{ backgroundColor: 'pink' }}>
				<div className='research'>
					{tabValue === 'industry' && (
						<div>
							<a className='research-tab-active'>Industry</a>
							<a onClick={() => setTabvalue('startup')}>Startups</a>
							<a onClick={() => setTabvalue('venture')}>Venture Hacks</a>
						</div>
					)}
					{tabValue === 'startup' && (
						<div>
							<a onClick={() => setTabvalue('industry')}>Industry</a>
							<a className='research-tab-active' onClick={() => setTabvalue('startup')}>
								Startups
							</a>
							<a onClick={() => setTabvalue('venture')}>Venture Hacks</a>
						</div>
					)}
					{tabValue === 'venture' && (
						<div>
							<a onClick={() => setTabvalue('industry')}>Industry</a>
							<a onClick={() => setTabvalue('startup')}>Startups</a>
							<a className='research-tab-active' onClick={() => setTabvalue('venture')}>
								Venture Hacks
							</a>
						</div>
					)}
				</div>
			</div>
			{show()}
		</div>
	);
}
