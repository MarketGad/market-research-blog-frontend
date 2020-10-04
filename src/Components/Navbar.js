import React from 'react';
import AccountIcon from '@material-ui/icons/AccountCircle';
import logo from './Favicon.jpg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReputationPoint from './ReputaionPoints';

const Navbar = () => {
	const [ redirect, setRedirect ] = React.useState(false);
	const [ reputation, setReputation ] = React.useState('');

	/*----------------------------conditional rendering of user name-----------------------------------*/
	const removecookie = () => {
		Cookies.remove('session-id');
	};
	const getReputation = () => {
		const cookie = Cookies.get('session-id');
		const config = {
			headers: {
				Authorization: `Bearer ${cookie}`
			}
		};
		axios.get('https://serieux-saucisson-31787.herokuapp.com/api/user/profile', config).then(
			(response) => {
				setReputation(response.data.user.reputation);
			},
			(error) => {
				console.log(error);
			}
		);
	};
	const show = () => {
		const cookie = Cookies.get('session-id');
		if (!cookie) {
			return (
				<li>
					<a style={{ color: 'white', fontSize: '1em' }} href='/signin'>
						Login
					</a>
				</li>
			);
		} else {
			getReputation();
			return (
				<li>
					<a style={{ color: 'white', fontSize: '1em' }} onClick={removecookie} href='/'>
						Logout
					</a>
				</li>
			);
		}
	};
	const showmobile = () => {
		const cookie = Cookies.get('session-id');
		if (!cookie) {
			return (
				<li>
					<a href='/signin'>Login</a>
				</li>
			);
		} else {
			return (
				<li>
					<a onClick={removecookie} href='/'>
						Logout
					</a>
				</li>
			);
		}
	};

	/*---------------------------------------------------------------------------------------------------*/

	if (redirect) {
		return <Redirect to='/dashboard' />;
	} else {
		return (
			<div>
				<div className='navbar-fixed'>
					<nav className='nav-center' role='navigation'>
						<div className='nav-wrapper'>
							<a href='/' data-target='mobile-demo' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</a>
							<a href='/' className='brand-logo logo sidenav-trigger'>
								<img
									height='55px'
									width='60px'
									style={{ position: 'relative' }}
									src={logo}
									alt='logo-mob'
								/>
							</a>
							<a className='right sidenav-trigger'>
								{reputation && <ReputationPoint ReputationPoint={reputation} />}
							</a>

							<ul id='dropdown1' className='dropdown-content' style={{ backgroundColor: 'black' }}>
								<li>
									<a
										href='/industry'
										style={{ color: 'white', fontSize: '1.1em', paddingLeft: '25px' }}
									>
										Industry
									</a>
								</li>
								<li>
									<a
										href='/startup'
										style={{ color: 'white', fontSize: '1.1em', paddingLeft: '25px' }}
									>
										Start-ups
									</a>
								</li>
								<li>
									<a
										href='/venturehack'
										style={{ color: 'white', fontSize: '1.1em', paddingLeft: '25px' }}
									>
										Venture Hacks
									</a>
								</li>
							</ul>
							<div className='navmenu'>
								<ul
									id='nav-mobilecomp-menu'
									style={{ backgroundColor: 'black' }}
									className='hide-on-med-and-down'
								>
									<li>
										<a className='logo' href='/'>
											<img style={{ position: 'relative' }} src={logo} alt='logo' />
										</a>
									</li>
									<li>
										<a href='/funding'>Funding</a>
									</li>
									<li>
										<a href='/industry' className='dropdown-trigger' data-target='dropdown1'>
											Research
										</a>
									</li>
									<li>
										<a href='/about'>About us</a>
									</li>
									<li className='right'>
										<div
											style={{ padding: '0 25px 0 80px' }}
											className='dropdown-trigger'
											data-target='account-dropdown'
										>
											{reputation && <ReputationPoint ReputationPoint={reputation} />}
											<AccountIcon
												fontSize='large'
												className='nav-icon'
												style={{ verticalAlign: 'middle' }}
											/>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<ul id='account-dropdown' className='dropdown-content' style={{ backgroundColor: 'black' }}>
						{show()}
						<li>
							<a href='/registerforproduct' style={{ color: 'white', fontSize: '1em' }}>
								Add product
							</a>
						</li>
						<li>
							<a href='/registerforjobs' style={{ color: 'white', fontSize: '1em' }}>
								Add job profile
							</a>
						</li>
					</ul>
				</div>
				<ul id='dropdown2' className='dropdown-content' style={{ backgroundColor: 'black' }}>
					<li>
						<a href='/industry' style={{ color: 'white' }}>
							Industry
						</a>
					</li>
					<li>
						<a href='/startup' style={{ color: 'white' }}>
							Start-ups
						</a>
					</li>
					<li>
						<a href='/venturehack' style={{ color: 'white' }}>
							Venture Hacks
						</a>
					</li>
				</ul>
				<ul className='sidenav' id='mobile-demo'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a className='dropdown-trigger1' data-target='dropdown2'>
							Research<i className='material-icons right'>arrow_drop_side</i>
						</a>
					</li>
					<li>
						<a href='/funding'>Funding</a>
					</li>

					{/* <li>
						<a onClick={handleClickOpen}>Dashboard</a>
					</li> */}
					<li>
						<a href='/about'>About us</a>
					</li>
					<li>
						<a href='/registerforproduct'>Add product</a>
					</li>
					<li>
						<a href='/registerforjobs'>Add job profile</a>
					</li>
					{showmobile()}
				</ul>
			</div>
		);
	}
};
export default Navbar;
