import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../Screens/signin';
import Cookies from 'js-cookie';
import Popup from './Popup';
import Controls from './controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const CommunityPopup = (props) => {
	const { setOpenCommunitypopup } = props;
	var width = document.documentElement.clientWidth;
	const url =
		width > 1000
			? 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605114057/Theme/Events_nx9kst.jpg'
			: 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1605114057/Theme/Events_nx9kst.jpg';

	return (
		<div
			className='communitypopup'
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
						setOpenCommunitypopup(false);
					}}
				>
					<CloseIcon style={{ color: 'black' }} />
				</Controls.ActionButton>
			</div>
		</div>
	);
};

export default CommunityPopup;
