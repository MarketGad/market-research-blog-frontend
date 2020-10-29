import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie';
import ShowComment from '../Components/ShowComment';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';
import ThreeDotLoad from '../Components/ThreeDotLoad';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
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
		marginTop: theme.spacing(1),
		padding: '10px 5px'
	},
	submit: {
		height: '3.8em',
		margin: theme.spacing(0, 1, 0),
		fontWeight: '800'
	}
}));
const Profile = (props) => {
	const classes = useStyles();
	const product = props.product;
	const id = props.id;
	const focusComment = props.focusComment;
	const [ comment, setComment ] = React.useState('');
	const [ commentdone, setCommentsuccess ] = React.useState(false);
	const [ readytocomment, setReadytoComment ] = React.useState('');
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const [ comments, setComments ] = React.useState([]);

	let link = '';
	if (product) {
		link = /^https?:\/\//.test(product.link) ? product.link : 'https://' + product.link;
	}
	useEffect(() => {
		if (product.comments !== undefined && commentdone === false) {
			setComments(product.comments);
		}
	});

	const showComments = (comments) =>
		comments.length ? (
			comments.map((comment) => {
				if (comment) {
					return <ShowComment comment={comment} />;
				} else {
					return <div />;
				}
			})
		) : (
			<div className='center'> No Comments to show :( </div>
		);
	const submitHandler = (e) => {
		e.preventDefault();
		const token = Cookies.get('session-id');
		if (!token) {
			setOpenSignin(true);
			return;
		}
		if (comment) {
			const config = {
				headers: {
					Authorization: `Bearer  ${token}`
				}
			};
			axios
				.post(
					process.env.REACT_APP_BASEURL + '/api/disrupterclub/posts/' + id + '/comments',
					{
						comment: comment
					},
					config
				)
				.then(
					(response) => {
						if (response.data) {
							setCommentsuccess(true);
							setComments(response.data);
							setComment('');
						}
					},
					(error) => {
						alert('something went wrong');
					}
				);
		}
	};
	if (product.title) {
		return (
			<div className='communitydetails-container'>
				<div>
					<div className='product-head'>{product.title}</div>
					<div style={{ padding: '10px 0' }} className='product-content'>
						{product.description}
					</div>

					<div style={{ margin: '10px' }}>
						{link.length > 0 && (
							<span>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href={link}
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
								</a>
							</span>
						)}
						<span
							style={{
								margin: '0 10px',
								fontSize: '1em',
								fontWeight: '800',
								borderRadius: '5px'
							}}
							className='waves-effect waves-light btn-small black'
						>
							{product.hashtag ? product.hashtag : '#idea'}
						</span>
					</div>
				</div>
				<div id='comments'>
					<div className='row'>
						<div className='col s12 l12' style={{ padding: '0', margin: '0' }}>
							<div className='card'>
								<div className='card-content'>
									<span className='card-title product-comment'>
										Comments ({product.comments.length})
									</span>
									<form className={classes.form} onSubmit={submitHandler}>
										<Grid container spacing={2}>
											<Grid item xs={8} sm={10}>
												{focusComment !== '' && (
													<TextField
														fullWidth
														id='outlined-textarea'
														label='Comment'
														placeholder='What’s cool about this?'
														multiline
														autoFocus
														variant='outlined'
														value={comment}
														onChange={(e) => setComment(e.target.value)}
													/>
												)}
												{focusComment === '' && (
													<TextField
														fullWidth
														id='outlined-textarea'
														label='Comment'
														placeholder='What’s cool about this?'
														multiline
														variant='outlined'
														value={comment}
														onChange={(e) => setComment(e.target.value)}
													/>
												)}
											</Grid>
											<Grid item xs={3} sm={2}>
												<Button type='submit' variant='contained' className={classes.submit}>
													Add Comment
												</Button>
											</Grid>
										</Grid>
									</form>
									{showComments(comments)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
					<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
				</Popup>
			</div>
		);
	} else
		return (
			<div className='center'>
				<ThreeDotLoad />
			</div>
		);
};

const ProductProfile = (props) => {
	const classes = useStyles();
	const id = props.match.params.trend_id;
	const focusComment = props.location.search;
	const product = props.posts.find((item) => item._id === id);
	return <Profile product={product === undefined ? [] : product} id={id} focusComment={focusComment} />;
};

export default ProductProfile;
