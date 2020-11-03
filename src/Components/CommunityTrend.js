import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import FadingLoader from './FadingLoader';

import { Link, Redirect } from 'react-router-dom';
import Popup from './Popup';
import SignIn from '../Screens/signin';

const CommunityTrend = (props) => {
	const token = Cookies.get('session-id');
	const [ readytoupvote, setReadytoupvote ] = React.useState('');
	if (token) {
		const token_id = JSON.parse(atob(token.split('.')[1]));
		var user_id = token_id._id;
	}
	const ProductCard = (props) => {
		const product = props.product;
		const weblink = props.weblink;
		const [ openSignin, setOpenSignin ] = React.useState(false);
		const [ upvote, setUpvote ] = React.useState(product.upvotes.length);
		const [ activeupvote, setactiveupvote ] = React.useState(false);

		const addUpvote = (product_id, product) => {
			if (!token) {
				setOpenSignin(true);
				return;
			}
			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const token_info = JSON.parse(atob(token.split('.')[1]));
			if (product.upvotes.includes(token_info._id)) {
				alert('already upvoted');
			} else {
				setUpvote(upvote + 1);
				setactiveupvote(true);
				axios
					.post(
						process.env.REACT_APP_BASEURL + '/api/disrupterclub/posts/' + product_id + '/upvote',
						{},
						config
					)
					.then(
						(response) => {},
						(error) => {
							console.log(error);
							// alert(error);
						}
					);
			}
		};

		return (
			<li className='collection-item avatar' style={{ paddingLeft: '15px' }}>
				<div className='row' style={{ margin: '0' }}>
					<div className='col l11 s10'>
						<div>
							<Link
								style={{ color: 'black' }}
								className='product-content product-name'
								to={`/community/${product._id}`}
							>
								{product.title}
							</Link>
							<div className='trend-desc'>{product.description}</div>
							<div className='row product-link-container'>
								<div className='col l1 s3 comment-box'>
									<Link
										target='_blank'
										rel='noopener noreferrer'
										to={weblink}
										className='waves-effect waves-light btn-small visit-btn'
									>
										<span
											className='material-icons chat-icon'
											style={{
												position: 'relative',
												padding: '0 5px',
												fontSize: '16px'
											}}
										>
											near_me
										</span>
									</Link>
								</div>
								<div className='col l2 s4 comment-box'>
									<Link
										to={`/community/${product._id}`}
										className='waves-effect waves-light btn-small visit-btn'
									>
										<span className='comment-count'>{product.comments.length}</span>
										<span
											className='material-icons chat-icon'
											style={{
												position: 'relative',
												padding: '0 5px',
												fontSize: '16px'
											}}
										>
											chat
										</span>
									</Link>
								</div>
							</div>
							<div style={{ margin: '10px' }}>
								<span
									className='material-icons chat-icon'
									style={{
										position: 'relative',
										verticalAlign: 'middle',
										padding: '0 5px',
										fontSize: '16px'
									}}
								>
									account_circle
								</span>
								<span>{product.user.firstname}</span>
								<span
									style={{
										margin: '0 10px',
										height: '1.3em',
										lineHeight: '1.3em',
										padding: '0 3px'
									}}
									className='waves-effect waves-light btn-small black'
								>
									{product.hashtag ? product.hashtag : '#idea'}
								</span>
							</div>
						</div>
					</div>
					<div className='col l1 s2'>
						{product.upvotes.includes(user_id) && (
							<div style={{ textAlign: 'center', position: 'relative', top: '-1em' }}>
								<img
									src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991888/Theme/Upvote_Icon_Clicked_fubsbj.png'
									alt=''
									width='100%'
								/>
								<div className='bulb-count secondary-content'>{upvote}</div>
							</div>
						)}
						{activeupvote === true && (
							<div style={{ textAlign: 'center', position: 'relative', top: '-1em' }}>
								<img
									src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991888/Theme/Upvote_Icon_Clicked_fubsbj.png'
									alt=''
									width='100%'
								/>
								<div className='bulb-count right-align secondary-content'>{upvote}</div>
							</div>
						)}
						{(!product.upvotes.includes(user_id) || !token) &&
						activeupvote === false && (
							<div
								onClick={() => addUpvote(product._id, product)}
								style={{
									textAlign: 'center',
									position: 'relative',
									top: '-1em',
									cursor: 'pointer'
								}}
							>
								<img
									src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991789/Theme/CommunityUpvote_Icon_gaye3c.png'
									alt=''
									width='100%'
								/>
								<div className='bulb-count right-align secondary-content'>{upvote}</div>
							</div>
						)}
					</div>
				</div>
				<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
					<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
				</Popup>
			</li>
		);
	};

	const showProducts = props.posts.length ? (
		props.posts.map((product, index) => {
			if (!/^https?:\/\//.test(product.websiteLink)) {
				let weblink = 'https://' + product.websiteLink;
				return <ProductCard key={index} product={product} weblink={weblink} />;
			} else return <ProductCard key={index} product={product} weblink={product.websiteLink} />;
		})
	) : (
		<div className='center' />
	);
	if (readytoupvote === false) return <Redirect to='/signin' />;
	else
		return (
			<div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
				{props.posts && (
					<div>
						<ul className='collection product-container'>{showProducts}</ul>
					</div>
				)}
				{props.posts.length === 0 && (
					<div>
						<FadingLoader loadno={10} />
					</div>
				)}
			</div>
		);
};

export default CommunityTrend;
