import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../Screens/signin';
import Cookies from 'js-cookie';
import Popup from './Popup';

const StartingPopup = (props) => {
	const [ openSignin, setOpenSignin ] = React.useState(false);
	var width = document.documentElement.clientWidth;
	const url =
		width > 1000
			? 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605029518/Theme/Login_Window_Png_yytnwd.png'
			: 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605035916/Theme/Login_Window_Png_yytnwd_d1pllp.png';
	console.log(url);
	return (
		<div
			className='homepopup'
			style={{
				position: 'relative',
				backgroundSize: '100% 100%',
				backgroundPosition: 'center',
				backgroundImage: 'url(' + url + ')'
			}}
		>
			<div className='center'>
				<Link onClick={() => setOpenSignin(true)}>
					<a className='btn waves-effect waves center popup-btn-home'>Signin</a>
				</Link>
			</div>
			<Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
		</div>
	);
};

export default StartingPopup;
