import React from 'react';
import Footer from '../Components/Footer';
import PeopleList from '../Components/PeopleList';
import ProductList from '../Components/ProductList';
import Subscribe from '../Components/Subscribe';
import TodayLaunch from '../Components/TodayLaunch';
import TrendingProduct from '../Components/TrendingProduct';
import CarouselSlider from '../Components/Carousel';
import ProductCard from '../Components/ProductCard';
import ThreeDotLoad from '../Components/ThreeDotLoad';

class Products extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			products: this.props.products,
			tabValue: 'product'
		};
	}
	render () {
		const handleProduct = () => {
			this.setState({ tabValue: 'product' });
		};
		const handleTalent = () => {
			this.setState({ tabValue: 'talent' });
		};
		const show = () => {
			if (this.state.tabValue === 'product') {
				return (
					<div className='row'>
						<div className='col s12 m6 l3'>
							{/* <Productc products={this.props.products === undefined ? [] : this.props.products} /> */}
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
								desc='Tag the brand you&#39;re wearing.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
								desc='Shop for the latest collection of fun, quirky and premium socks for men.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
							/>
						</div>

						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
								desc='Tag the brand you&#39;re wearing.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
								desc='Shop for the latest collection of fun, quirky and premium socks for men.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990000/Theme/Expertron_dkfwhd.png'
								desc='Prepare for your interview using AI bots. '
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990088/Theme/Expertron_lzfgc0.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
								desc='Tag the brand you&#39;re wearing.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
								desc='Shop for the latest collection of fun, quirky and premium socks for men.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990000/Theme/Expertron_dkfwhd.png'
								desc='Prepare for your interview using AI bots. '
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990088/Theme/Expertron_lzfgc0.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990000/Theme/Expertron_dkfwhd.png'
								desc='Prepare for your interview using AI bots. '
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990088/Theme/Expertron_lzfgc0.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
								desc='Tag the brand you&#39;re wearing.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
								desc='Shop for the latest collection of fun, quirky and premium socks for men.'
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
							/>
						</div>
						<div className='col s12 m6 l3'>
							<ProductCard
								logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990000/Theme/Expertron_dkfwhd.png'
								desc='Prepare for your interview using AI bots. '
								background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990088/Theme/Expertron_lzfgc0.jpg'
							/>
						</div>
					</div>
				);
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
				<div>
					<img
						src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604393121/Theme/homepagecover_ojaz0x.jpg'
						width='100%'
					/>
				</div>

				<div className='product-job-page-container'>
					<div>
						<h5>What's New?</h5>
						<div style={{ padding: '1%', backgroundColor: 'white', borderRadius: '8px' }}>
							<CarouselSlider />
						</div>
					</div>
					<div style={{ padding: '10px' }}>
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
					{show()}
				</div>
				{/* <div className="product-job-page-container">
          <div className="row">
            <div className="col s12 l8">
              <div className="product-page-head">What's hot today?</div>
              <h6 className="product-quote">
                Latest cool stuffs to fix your pain points. Vote the best one.
              </h6>
              <TodayLaunch todayLaunch={this.props.todayLaunch} />
              <div className="product-page-head">Most liked</div>
              <ProductList
                products={
                  this.props.products === undefined ? [] : this.props.products
                }
              />
            </div>
            <div className="col s12 l4 joblist">
              <div className="add-mobile-btn">
                <div className="product-page-head">Trending products</div>
                <TrendingProduct trending={this.props.trending} />
              </div>
              <div className="row" style={{ margin: "0", padding: "0" }}>
                <div className="col s12 m8">
                  <div
                    className="product-page-head left-head"
                    style={{ paddingTop: "5px" }}
                  >
                    Trending talents
                  </div>
                  <h6 className="product-quote">Open for opportunities</h6>
                </div>
                <div className="col s4">
                  <div className="right-align">
                    <a
                      className="waves-effect waves-light btn-small pro-btn1 add-mobile-btn"
                      href="/registerforjobs"
                    >
                      Add profile
                    </a>
                  </div>
                </div>
              </div>
              <PeopleList
                jobProfiles={
                  this.props.jobProfiles === undefined
                    ? []
                    : this.props.jobProfiles
                }
              />
            </div>
          </div>
			</div>*/}
				<Subscribe />
				<Footer />
			</div>
		);
	}
}

export default Products;
