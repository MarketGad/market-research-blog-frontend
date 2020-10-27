import React from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import ThreeDotLoad from '../Components/ThreeDotLoad';
import SignIn from './signin';
import Popup from '../Components/Popup';

function Copyright () {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				marketgad.com
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
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
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(4, 0, 2),
		padding: '5px',
		fontWeight: '800',
		fontSize: '1.4em',
		letterSpacing: '0.1em'
	},
	chip: {
		padding: '10px',
		borderRadius: '5px',
		fontWeight: '900',
		fontSize: '1.2em',
		letterSpacing: '.07em'
	}
}));

export default function RegisterForJobs () {
	const classes = useStyles();
	const LoginCheck = Cookies.get('session-id');
	const [ first_name, setFirstName ] = React.useState('');
	const [ last_name, setLastName ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ confirmPassword, setConfirmPassword ] = React.useState('');
	const [ editsuccess, setEditsuccess ] = React.useState(false);
	const [ fileInputState, setFileInputState ] = React.useState('');
	const [ previewSource, setPreviewSource ] = React.useState('');
	const [ RegisterJobSuccess, setRegisterJobSuccess ] = React.useState(false);
	const [ load, setLoad ] = React.useState('');
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setFileInputState(e.target.value);
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
		if (!token) {
			return;
		}
		const config = {
			headers: {
				Authorization: `Bearer  ${token}`
			}
		};
		if (password === confirmPassword) {
			const data = {
				profilePic: previewSource,
				password: password,
				firstname: first_name,
				lastname: last_name
			};
			setLoad(true);
			axios.put(process.env.REACT_APP_BASEURL + '/api/user/profile', data, config).then(
				(response) => {
					if (response.status === 200) {
						setEditsuccess(true);
						setLoad(false);
					} else {
						alert(response.err);
					}
				},
				(error) => {
					if (error.message === 'Request failed with status code 413') {
						alert('upload photo size should be less than 500kb');
					} else {
						alert('Something went wrong, try again');
					}
				}
			);
		}
	};
	if (editsuccess) {
		return <Redirect to='/' />;
	} else if (load === true) {
		return (
			<div style={{ textAlign: 'center' }}>
				<ThreeDotLoad />
			</div>
		);
	} else {
		return (
			<div>
				<Container component='main' maxWidth='sm'>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<span style={{ fontSize: '26px' }} class='material-icons'>
								person
							</span>
						</Avatar>
						<Typography
							component='h2'
							variant='h5'
							style={{
								marginBottom: '20px'
							}}
						>
							<div className='product-content'>Update your profile</div>
						</Typography>
						<form className={classes.form} onSubmit={submitHandler}>
							<Grid container spacing={2}>
								{previewSource && (
									<img
										src={previewSource}
										alt='chosen'
										style={{
											width: '40%',
											height: '150px',
											textAlign: 'center',
											margin: '0 30%'
										}}
									/>
								)}
								<Grid item xs={12} sm={6}>
									<Chip
										className={classes.chip}
										label='Upload Picture'
										color='primary'
										icon={<CloudUploadIcon />}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<input
										required
										style={{ padding: '3px 0' }}
										id='fileInput'
										type='file'
										accept='image/*'
										name='image'
										onChange={handleFileInputChange}
										value={fileInputState}
										className='form-input'
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='fname'
										name='firstName'
										variant='outlined'
										required
										fullWidth
										id='firstName'
										label='First Name'
										value={first_name}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										value={last_name}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='password1'
										label='Password'
										type='password'
										id='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='password2'
										label='Confirm Password'
										type='password'
										id='password'
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
							>
								Update
							</Button>
						</form>
					</div>
					<Box m={2}>
						<Copyright />
					</Box>
				</Container>
			</div>
		);
	}
}
