import { Grid, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import Cookies from 'js-cookie';
import Joblist from '../Components/Joblist';
import PeopleList from '../Components/PeopleList';
import FormPassion from '../Components/FormPassion';
import Popup from '../Components/Popup';
import SignIn from './signin';
import Footer from '../Components/Footer';
const industries = [
	{
		value: '',
		label: 'All'
	},
	{
		value: 'Software',
		label: 'Software'
	},
	{
		value: 'Operations',
		label: 'Operations'
	},
	{
		value: 'Marketing',
		label: 'Marketing'
	},
	{
		value: 'Finance',
		label: 'Finance'
	},
	{
		value: 'Engineering',
		label: 'Engineering'
	},
	{
		value: 'Product',
		label: 'Product'
	},
	{
		value: 'Other',
		label: 'Other'
	}
];
const ListProduct = (props) => {
	const [ filter, setFilter ] = React.useState('');
	const isLoggedin = Cookies.get('session-id');
	const registered = Cookies.get('job-profile');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ openJobprofile, setOpenjobprofile ] = React.useState(false);
	return (
		<div style={{ backgroundColor: '#ececec' }}>
			<div>
				<img
					src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604393112/Theme/job-page-cover_np3nv8.jpg'
					width='100%'
				/>
			</div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<Grid container spacing={3} className='job-page-head'>
							<Grid item sm={6} xs={6}>
								<div>Trending jobs</div>
							</Grid>
							<Grid item sm={6} xs={6} className='right-align'>
								<TextField
									className='filter-field'
									select
									label='Filter'
									value={filter}
									variant='outlined'
									onChange={(e) => setFilter(e.target.value)}
								>
									{industries.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Grid>
						</Grid>

						<Joblist jobs={props.jobs} filter={filter} />
						<div className='product-page-head'>Internships</div>
						<Joblist jobs={props.internship} filter={filter} />
					</div>
					<div className='col s12 l4'>
						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s12 m8'>
								<div className='job-page-head'>Trending talents</div>
								<h6 className='product-quote'>Open for opportunities</h6>
							</div>
							<div className='col s4'>
								<div className='right-align'>
									<a
										className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
										onClick={() => {
											if (isLoggedin) {
												setOpenjobprofile(true);
											} else setOpenSignin(true);
										}}
									>
										Add profile
									</a>
								</div>
							</div>
						</div>
						<PeopleList jobProfiles={props.jobProfiles === undefined ? [] : props.jobProfiles} />
					</div>
				</div>
			</div>
			<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
			<Popup openPopup={openJobprofile} setOpenPopup={setOpenjobprofile}>
				<FormPassion openJobprofile={openJobprofile} setOpenjobprofile={setOpenjobprofile} />
			</Popup>
			<Footer />
		</div>
	);
};
export default ListProduct;
