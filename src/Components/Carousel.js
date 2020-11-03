import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductCard from './ProductCard';
import Item from './Item';
import { consts } from 'react-elastic-carousel';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];

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

export default function CarouselSlider () {
	return (
		<div className='Ap'>
			<Carousel
				breakPoints={breakPoints}
				pagination={false}
				enableAutoPlay={true}
				autoPlaySpeed={1000}
				disableArrowsOnEnd={false}
				renderArrow={myArrow}
			>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
						desc='Tag the brand you&#39;re wearing.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
					/>
				</Item>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
						desc='Shop for the latest collection of fun, quirky and premium socks for men.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
					/>
				</Item>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990000/Theme/Expertron_dkfwhd.png'
						desc='Prepare for your interview using AI bots. '
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990088/Theme/Expertron_lzfgc0.jpg'
					/>
				</Item>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
						desc='Shop for the latest collection of fun, quirky and premium socks for men.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
					/>
				</Item>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
						desc='Shop for the latest collection of fun, quirky and premium socks for men.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
					/>
				</Item>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
						desc='Tag the brand you&#39;re wearing.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
					/>
				</Item>
				<Item>
					<ProductCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
						desc='Tag the brand you&#39;re wearing.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
					/>
				</Item>
			</Carousel>
		</div>
	);
}
