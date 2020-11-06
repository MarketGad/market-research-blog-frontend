import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import FadingLoader from './FadingLoader';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';
import ProductCard from '../Components/ProductCard';

import { Link, Redirect } from 'react-router-dom';

const ProductList = (props) => {
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const showProducts = props.products.length ? (
		props.products.map((product, index) => {
			const weblink = !/^https?:\/\//.test(product.websiteLink)
				? 'https://' + product.websiteLink
				: product.websiteLink;
			return (
				<div className='col s12 m6 l3'>
					<ProductCard
						openSignin={openSignin}
						setOpenSignin={setOpenSignin}
						key={index}
						product={product === undefined ? [] : product}
						weblink={weblink}
						showbuttons={true}
					/>
				</div>
			);
		})
	) : (
		<div className='center' />
	);
	return (
		<div>
			<div>
				{props.products.length > 0 && <div className='row'>{showProducts}</div>}
				{props.products.length === 0 && (
					<div>
						<FadingLoader loadno={5} />
					</div>
				)}
			</div>
			<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
		</div>
	);
};

export default ProductList;
