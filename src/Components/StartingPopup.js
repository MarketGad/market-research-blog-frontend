import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../Screens/signin';
import Cookies from 'js-cookie';
import Popup from './Popup';
import Controls from './controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const StartingPopup = (props) => {
	const isLoggedin = Cookies.get('session-id');
	const { openPopup, setOpenPopup } = props;
	const [ openSignin, setOpenSignin ] = React.useState(false);
	var width = document.documentElement.clientWidth;
	const url =
		width > 1000
			? 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605029518/Theme/Login_Window_Png_yytnwd.png'
			: 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605089166/Theme/WhatsApp_Image_2020-11-10_at_20.09.30_ahbgob.png';
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
			<div style={{ textAlign: 'end' }}>
				<Controls.ActionButton
					onClick={() => {
						setOpenPopup(false);
					}}
				>
					<CloseIcon style={{ color: 'white' }} />
				</Controls.ActionButton>
			</div>
			<div className='center'>
				{!isLoggedin && (
					<Link onClick={() => setOpenSignin(true)}>
						<a className='btn waves-effect waves center popup-btn-home'>Signin</a>
					</Link>
				)}
			</div>
			<Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
		</div>
	);
};

export default StartingPopup;
