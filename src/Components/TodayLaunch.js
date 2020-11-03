import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FadingLoader from './FadingLoader';
import SignIn from '../Screens/signin';
import Popup from '../Components/Popup';
import ProductCard from './ProductCard';
import Item from './Item';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];
const TodayLaunch = (props) => {
	function myArrow ({ type, onClick, isEdge }) {
		const pointer = type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
		return (
			<Button
				onClick={onClick}
				disabled={isEdge}
				style={{
					minWidth: '0',
					padding: '0'
				}}
			>
				{pointer}
			</Button>
		);
	}
	const [ openSignin, setOpenSignin ] = React.useState(false);
	const showProducts = props.todayLaunch.length ? (
		props.todayLaunch.map((product, index) => {
			const weblink = !/^https?:\/\//.test(product.websiteLink)
				? 'https://' + product.websiteLink
				: product.websiteLink;
			return (
				<Item>
					<ProductCard
						openSignin={openSignin}
						setOpenSignin={setOpenSignin}
						key={index}
						product={product === undefined ? [] : product}
						weblink={weblink}
					/>
				</Item>
			);
		})
	) : (
		<div className='center' />
	);

	return (
		<div>
			<div className='Ap' style={{ padding: '1%', backgroundColor: 'white', borderRadius: '8px' }}>
				{props.todayLaunch.length > 0 && (
					<Carousel
						breakPoints={breakPoints}
						pagination={false}
						enableAutoPlay={true}
						autoPlaySpeed={1000}
						disableArrowsOnEnd={false}
						renderArrow={myArrow}
					>
						{showProducts}
					</Carousel>
				)}
				{props.todayLaunch.length === 0 && (
					<div>
						<FadingLoader loadno={3} />
					</div>
				)}
			</div>
			<Popup title='Signin' openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
		</div>
	);
};

export default TodayLaunch;
