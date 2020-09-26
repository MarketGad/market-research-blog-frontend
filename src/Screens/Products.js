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
						<h6 style={{ paddingTop: '0', fontSize: '1.05em', marginBottom: '15px' }}>
							Latest cool stuffs to fix your pain points.Vote the best one.
						</h6>
						<ProductList />
					</div>
					<div className='col s12 l4'>
						<div className='joblist'>
							<div className='row'>
								<div className='col s8'>
									<div className='product-page-head left-head'>Trending talents</div>
								</div>
								<div className='col s4'>
									<div className='right-align'>
										<a
											className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
											href='/registerforjobs'
										>
											Add profile
										</a>
									</div>
								</div>
							</div>
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
