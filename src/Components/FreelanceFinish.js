import React from 'react';

const FreelanceFinish = (props) => {
	return (
		<div className='row'>
			<div className='col l6 s12 center'>
				<img
					width='100%'
					src={
						'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422793/Theme/Photo_r6eo4i.png'
					}
				/>
			</div>
			<div className='col l6 s12'>
				<div
					className='center'
					style={{ fontSize: '1.5em', fontFamily: 'Bahnschrift', color: 'darkblue', padding: '20px 0' }}
				>
					Once you create your job profile,you can’t edit your profile for a month.Happy Gigging :)
				</div>
				<form Validate>
					<div className='center' style={{ padding: '10px' }}>
						<label>
							<input required class='with-gap' name='group1' type='radio' />
							<span>
								I agree to all <a href='#'>Terms & Conditions </a>
							</span>
						</label>
					</div>
					<div className='center'>
						<button
							type='submit'
							class='btn-small'
							style={{
								margin: '6%',
								backgroundColor: '#1e4a72',
								color: 'white',
								borderRadius: '15px',
								padding: '0 7%'
							}}
						>
							Finish
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FreelanceFinish;
