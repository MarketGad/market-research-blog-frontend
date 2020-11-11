import React from 'react';
import Footer from '../Components/Footer';
import PeopleList from '../Components/PeopleList';
import Popup from '../Components/Popup';
import ProductList from '../Components/ProductList';
import StartingPopup from '../Components/StartingPopup';
import Subscribe from '../Components/Subscribe';
import TodayLaunch from '../Components/TodayLaunch';

class Products extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			products: this.props.products,
			tabValue: 'product',
			modalState: true
		};

		this.handleShow = this.handleShow.bind(this);
	}
	handleShow = () => {
		this.setState(() => {
			return {
				modalState: false
			};
		});
	};

	render () {
		const handleProduct = () => {
			this.setState({ tabValue: 'product' });
		};
		const handleTalent = () => {
			this.setState({ tabValue: 'talent' });
		};
		const show = () => {
			if (this.state.tabValue === 'product') {
				return <ProductList products={this.props.products === undefined ? [] : this.props.products} />;
			} else {
				return (
					<div className='trendingtalent-home-container'>
						<PeopleList jobProfiles={this.props.jobProfiles === undefined ? [] : this.props.jobProfiles} />
					</div>
				);
			}
		};
		return (
			<div style={{ backgroundColor: 'rgb(240,240,240)' }}>
				{this.props.products.length > 0 &&
				this.props.jobProfiles.length > 0 &&
				this.props.todayLaunch.length > 0 &&
				this.props.trending.length > 0 &&
				this.props.posts.length > 0 && (
					<Popup noClose={true} openPopup={this.state.modalState} setOpenPopup={this.handleShow}>
						<StartingPopup openHomepopup={this.state.modalState} setOpenHomepopup={this.handleShow} />
					</Popup>
				)}

				<div>
					<img
						src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604393121/Theme/homepagecover_ojaz0x.jpg'
						width='100%'
					/>
				</div>

				<div style={{ margin: '-.3% 2%' }}>
					<div
						style={{
							margin: '0 -2%'
						}}
					>
						<div className='topnav-prod'>
							{this.state.tabValue === 'product' && (
								<div>
									<a id='topProduct' onClick={handleProduct} className='topnav-active'>
										Top Products
									</a>
									<a id='trendingTalent' onClick={handleTalent}>
										Trending Talents
									</a>
								</div>
							)}
							{this.state.tabValue === 'talent' && (
								<div>
									<a id='topProduct' onClick={handleProduct}>
										Top Products
									</a>
									<a id='trendingTalent' className='topnav-active' onClick={handleTalent}>
										Trending Talents
									</a>
								</div>
							)}
						</div>
					</div>
					<h5 style={{ padding: '3px 10px' }}>
						<b style={{ fontFamily: 'Bahnschrift Semibold' }}>What's New?</b>
					</h5>
					<TodayLaunch todayLaunch={this.props.todayLaunch} />
				</div>
				<div className='product-page-container'>{show()}</div>
				<Subscribe />
				<Footer />
			</div>
		);
	}
}

export default Products;
