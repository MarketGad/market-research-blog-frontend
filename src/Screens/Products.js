import React from 'react';
import Footer from '../Components/Footer';
import PeopleList from '../Components/PeopleList';
import ProductList from '../Components/ProductList';
import Subscribe from '../Components/Subscribe';

const Products = () => {
	return (
		<div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='product-page-head'>What's hot ?</div>
						<h6 style={{ paddingTop: '0', margin: '0' }}>
							Latest cool stuffs to fix your pain points. Vote the best one
						</h6>
						{/* <a
								className='waves-effect waves-light btn pro-btn1 add-mobile-btn'
								href='/registerforproduct'
							>
								Add Product
							</a> */}

						<ProductList />
					</div>
					<div className='col s12 l4'>
						<div className='relative-add'>
							<div className='product-page-head '>Trending talents</div>
						</div>
						<PeopleList />
					</div>
				</div>
			</div>
			<Subscribe />
			<Footer />
		</div>
	);
};

export default Products;
