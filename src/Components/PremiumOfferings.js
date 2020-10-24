import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		},
		paper: {
			marginTop: theme.spacing(0),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			margin: theme.spacing(1)
		}
	}
}));

export default function PremiumOfferings () {
	const classes = useStyles();

	return (
		<div className='row'>
			<div className='col l6 s12 center'>
				<img
					width='80%'
					src={
						'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422660/Theme/Photo1_bhaduk.png'
					}
				/>
			</div>

			<div className='col l6 s12'>
				<div
					className='center'
					style={{
						paddingBottom: '4%',
						fontSize: '1.4em',
						fontWeight: '600',
						fontFamily: 'Bahnschrift',
						color: 'darkblue'
					}}
				>
					What's your premium offering?
				</div>
				<form className={classes.form} Validate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='service'
								label='Service Offered'
								type='text'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField fullWidth id='delivery' label='Delivery Time' type='text' variant='outlined' />
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='offering'
								label='Details of Offering'
								type='text'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField required fullWidth id='price' label='Price' type='numeric' variant='outlined' />
						</Grid>
					</Grid>
					<div className='center' style={{ padding: '10px' }}>
						<div>
							<label>
								<input required class='with-gap' name='group1' type='radio' />
								<span>
									I agree to all <a href='#'>Terms & Conditions </a>
								</span>
							</label>
						</div>
					</div>
					<div className='center'>
						<button
							type='submit'
							class='btn-small'
							style={{
								margin: '5%',
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
}
