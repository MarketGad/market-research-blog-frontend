import React from 'react';
import { Link } from 'react-router-dom';

const BurnCoinError = (props) => {
	return (
		<div>
			<div className='row'>
				<div className='col l6 s12'>
					<p style={{ textAlign: 'center' }}>
						<img
							width='80%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603256319/Theme/9_Icon_qdgix7.png'
							}
						/>
					</p>
				</div>
				<div className='col l6 s12' style={{ padding: '5% 0' }}>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue'
						}}
					>
						997 MG users are in the waiting list!
					</div>
					<div
						className='center'
						style={{
							fontSize: '1.6em',
							fontFamily: 'Bahnschrift',
							color: 'darkblue',
							margin: '5% 0'
						}}
					>
						Burn your interaction points to join the exclusive discounts on the products.
					</div>
					<div className='center'>
						<div
							className='center'
							style={{
								fontSize: '1.2em',
								fontFamily: 'Bahnschrift',
								color: '#87879f'
							}}
						>
							You need 1000 interaction coins to activate this.
						</div>
						<div className='center'>
							<Link to='/'>
								<div
									class='btn-small'
									style={{
										backgroundColor: '#1e4a72',
										color: 'white',
										border: 'none',
										margin: '8% 0',
										borderRadius: '9px',
										padding: '0% 4%',
										fontWeight: 'bold',
										fontSize: '19px'
									}}
								>
									Earn Coins
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurnCoinError;
