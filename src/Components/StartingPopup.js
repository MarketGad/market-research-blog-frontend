import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../Screens/signin';
import Cookies from 'js-cookie';
import Popup from './Popup';
import Controls from './controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const StartingPopup = (props) => {
	const isLoggedin = Cookies.get('session-id');
	const { setOpenHomepopup } = props;
	const [ signin, opensign ] = React.useState(false);
	var width = document.documentElement.clientWidth;
	const url =
		width > 1000
			? 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605029518/Theme/Login_Window_Png_yytnwd.png'
			: 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605089166/Theme/WhatsApp_Image_2020-11-10_at_20.09.30_ahbgob.png';

	const handleClick = () => {
		opensign(true);
	};
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
						setOpenHomepopup(false);
					}}
				>
					<CloseIcon style={{ color: 'white' }} />
				</Controls.ActionButton>
			</div>
			<div className='center'>
				{!isLoggedin && (
					<a onClick={handleClick}>
						<img
							className='popup-btn-home'
							src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605103275/Theme/Sign_up_1_gsnfwj.png'
							alt=''
							width='30%'
						/>
					</a>
				)}
			</div>
			<Popup openPopup={signin} setOpenPopup={opensign}>
				<SignIn openSignin={signin} setOpenSignin={opensign} />
			</Popup>
		</div>
	);
};

export default StartingPopup;
