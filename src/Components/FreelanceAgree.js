import React from 'react';

const FreelanceAgree = (props) => {
	return (
		<div>
			<div className='row'>
				<div className='col l6 s12'>
					<div className='center'>
						<img
							width='100%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422864/Theme/Photo2_mvvte6.png'
							}
						/>
					</div>
				</div>
				<div className='col l6 s12'>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue'
						}}
					>
						Would you like to create your freelancing profile at MG?
					</div>
					<div className='center'>
						<div
							class='btn-small'
							style={{
								backgroundColor: '#00a34f',
								width: '6em',
								margin: '3%',
								fontWeight: 800,
								color: 'white',
								borderRadius: '15px'
							}}
						>
							Yes
						</div>
						<div
							class='btn-small'
							style={{
								backgroundColor: '#eb0c0e',
								width: '6em',
								fontWeight: 800,
								margin: '3%',
								color: 'white',
								borderRadius: '15px'
							}}
						>
							No
						</div>
						<div
							className='center'
							style={{
								fontSize: '1.2em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								margin: '3% 0'
							}}
						>
							We are the only platform that doesn't charge any commissions on your freelancing work. Happy
							Gigging :)
						</div>
						<div
							className='center'
							style={{
								fontSize: '1em',
								fontFamily: 'Bahnschrift',
								color: '#87879f',
								margin: '2% 15%'
							}}
						>
							Facts: India is the largest freelancers' market with unlimited working opportunities.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FreelanceAgree;
