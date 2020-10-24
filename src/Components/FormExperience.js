import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '20ch'
		},
		paper: {
			marginTop: theme.spacing(0),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		avatar: {
			color: '#080808d9',
			backgroundColor: 'transparent',
			fontSize: '48vw'
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(0)
		},
		submit: {
			margin: theme.spacing(2, 0, 2)
		}
	}
}));

export default function FormExperience () {
	const classes = useStyles();

	return (
		<div className='exp-cont'>
			<div className='row'>
				<div className='col l6 s12'>
					<p style={{ textAlign: 'center' }}>
						<img
							width='80%'
							src={
								'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422918/Theme/Photo_ok6x8w.png'
							}
						/>
					</p>
				</div>

				<div className='col l6 s12'>
					<div className='center' className='exp-p1'>
						It will just take two minutes to launch your the future of your career with MarketGad
					</div>
					<div className='center' className='exp-p2'>
						Professional Details
					</div>
					<form className={classes.root} noValidate autoComplete='off' style={{ textAlign: 'center' }}>
						<div>
							<TextField
								variant='outlined'
								fullWidth
								id='experience'
								label='Experience'
								name='experience'
								/*value={experience}
											onChange={(e) => setExperience(e.target.value)}*/
							/>
							<TextField id='experienceyears' label='Experience years' type='number' variant='outlined' />
							<TextField
								variant='outlined'
								required
								fullWidth
								id='linkedIn'
								label='LinkedIn'
								name='linkedIn'
								/*value={linkedIn}
											onChange={(e) => setlinkedin(e.target.value)}*/
							/>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='skills'
								label='Skills'
								name='lastName'
								autoComplete='skills'
								/*value={skills}
											onChange={(e) => setSkills(e.target.value)}*/
							/>
						</div>
					</form>

					<div className='center' style={{ padding: '3% 0 0 2%', textAlign: 'center' }}>
						<div
							class='btn-small'
							style={{
								backgroundColor: '#1e4a72',
								color: 'white',
								border: 'none',
								borderRadius: '15px',
								paddingLeft: '7%',
								paddingRight: '7%'
							}}
						>
							Next
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
