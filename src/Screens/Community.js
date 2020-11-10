import React from 'react';
import CommunityTrend from '../Components/CommunityTrend';
import PeopleList from '../Components/PeopleList';
import Cookies from 'js-cookie';
import Popup from '../Components/Popup';
import SignIn from './signin';
import CommunityForm from './CommunityForm';

const Community = (props) => {
	const isLoggedin = Cookies.get('session-id');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ openForm, setOpenForm ] = React.useState(false);

	return (
		<div style={{ backgroundColor: '#ececec' }}>
			<div>
				<img
					src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604393124/Theme/community_cover_myo0r3.jpg'
					width='100%'
				/>
			</div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s12 m8'>
								<div className='product-page-head'>Disrupters' club</div>
								<h6 className='product-quote'>Latest cool products or ideas cooking in your mind</h6>
							</div>
							<div className='col s4'>
								<div className='right-align' style={{ paddingTop: '10px' }}>
									<a
										className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
										onClick={() => {
											if (isLoggedin) {
												setOpenForm(true);
											} else setOpenSignin(true);
										}}
									>
										Start a trend
									</a>
								</div>
							</div>
						</div>
						<CommunityTrend posts={props.posts} />
					</div>
					<div className='col s12 l4 joblist'>
						<div className='product-page-head left-head' style={{ paddingTop: '5px' }}>
							Leaderboard
						</div>
						<PeopleList jobProfiles={props.jobProfiles} />
					</div>
				</div>
			</div>
			<Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
			<Popup openPopup={openForm} setOpenPopup={setOpenForm}>
				<CommunityForm openForm={openForm} setOpenForm={setOpenForm} />
			</Popup>
		</div>
	);
};
export default Community;
