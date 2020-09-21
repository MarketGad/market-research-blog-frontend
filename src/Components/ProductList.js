import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import ShowComment from './ShowComment';

import { Link, Redirect } from 'react-router-dom';

const ProductList = () => {
	const token = Cookies.get('session-id');
	const [ products, setProducts ] = React.useState('');
	const [ readytoupvote, setReadytoupvote ] = React.useState('');
	if (token) {
		const token_id = JSON.parse(atob(token.split('.')[1]));
		var user_id = token_id._id;
	}
	const ProductCard = (props) => {
		const product = props.product;
		const weblink = props.weblink;
		const [ upvote, setUpvote ] = React.useState(product.upvotes);
		const [ activeupvote, setactiveupvote ] = React.useState(false);

		const addUpvote = (product_id, product) => {
			if (!token) {
				setReadytoupvote(false);
				return;
			}
			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const token_info = JSON.parse(atob(token.split('.')[1]));
			if (product.upvotesList.includes(token_info._id)) {
				alert('already upvoted');
			} else {
				setUpvote(product.upvotes + 1);
				setactiveupvote(true);
				axios
					.post(
						'https://serieux-saucisson-31787.herokuapp.com/api/productdetails/' +
							product_id +
							'/upvotes/add',
						{},
						config
					)
					.then(
						(response) => {
							console.log('added');
						},
						(error) => {
							console.log(error);
							// alert(error);
						}
					);
			}
		};

		return (
			<div>
				<ul className='collection product-container'>
					<li className='collection-item avatar'>
						<Link
							to={{
								pathname: `/p${product._id}`,
								state: { product: product, weblink: weblink }
							}}
						>
							<img className='circle pro-img' src={product.logo} alt={product.name} />
						</Link>

						<div className='product-right-container'>
							<Link
								style={{ color: 'black' }}
								className='product-content product-name'
								to={{
									pathname: `/p${product._id}`,
									state: { product: product, weblink: weblink }
								}}
							>
								{product.name}
							</Link>
							<div className='product-desc'>{product.briefDescription}</div>
							<div className='row product-link-container'>
								<div className='col l2 s6 comment-box'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={weblink}
										className='waves-effect waves-light btn-small visit-btn'
									>
										<span className='comment-count'>visit</span>
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
								</div>
								<div className='col l2 s4 comment-box'>
									<Link
										to={{
											pathname: `/p${product._id}`,
											state: { product: product, weblink: weblink }
										}}
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
							{product.upvotesList.includes(user_id) && (
								<div id='upvote-count' className='secondary-content upvote-container-active'>
									<i className='medium upvote-icon material-icons'>arrow_drop_up</i>
									<br />
									<span className='upvote-count'>{upvote}</span>
								</div>
							)}
							{activeupvote === true && (
								<div id='upvote-count' className='secondary-content upvote-container-active'>
									<i className='medium upvote-icon material-icons'>arrow_drop_up</i>
									<br />
									<span className='upvote-count'>{upvote}</span>
								</div>
							)}
							{(!product.upvotesList.includes(user_id) || !token) &&
							activeupvote === false && (
								<div
									onClick={() => addUpvote(product._id, product)}
									className='secondary-content upvote-container'
								>
									<i className='medium upvote-icon material-icons'>arrow_drop_up</i>
									<br />
									<span className='upvote-count'>{upvote}</span>
								</div>
							)}

							{product.comments.length > 0 && (
								<div className='comment-container'>
									<ShowComment comment={product.comments[0]} />
								</div>
							)}
						</div>
					</li>
				</ul>
			</div>
		);
	};
	const loadProducts = async () => {
		try {
			const res = await fetch('https://serieux-saucisson-31787.herokuapp.com/api/productdetails');
			const data = await res.json();
			setProducts(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);

	const showProducts = products.length ? (
		products.slice(0).reverse().map((product, index) => {
			if (!/^https?:\/\//.test(product.websiteLink)) {
				let weblink = 'https://' + product.websiteLink;
				return <ProductCard product={product} weblink={weblink} />;
			} else return <ProductCard product={product} weblink={product.websiteLink} />;
		})
	) : (
		<div className='center'> Loading... </div>
	);
	if (readytoupvote === false) return <Redirect to='/signin' />;
	else return <div>{showProducts}</div>;
};

export default ProductList;
