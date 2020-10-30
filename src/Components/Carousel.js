import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import SimpleCard from './Demo';
import Item from './Item';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];

export default function CarouselSlider () {
	return (
		<div className='Ap'>
			<Carousel
				breakPoints={breakPoints}
				pagination={false}
				enableAutoPlay={true}
				autoPlaySpeed={1000}
				disableArrowsOnEnd={false}
			>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
						desc='Tag the brand you&#39;re wearing.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
					/>
				</Item>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
						desc='Shop for the latest collection of fun, quirky and premium socks for men.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
					/>
				</Item>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990000/Theme/Expertron_dkfwhd.png'
						desc='Prepare for your interview using AI bots. '
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603990088/Theme/Expertron_lzfgc0.jpg'
					/>
				</Item>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
						desc='Shop for the latest collection of fun, quirky and premium socks for men.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
					/>
				</Item>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603979339/Theme/SockSoho_mk74rd.png'
						desc='Shop for the latest collection of fun, quirky and premium socks for men.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603980780/Theme/SockSoho_llzf1p.jpg'
					/>
				</Item>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
						desc='Tag the brand you&#39;re wearing.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
					/>
				</Item>
				<Item>
					<SimpleCard
						logoUrl='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603978970/Theme/Woovly_wssc8n.png'
						desc='Tag the brand you&#39;re wearing.'
						background='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg'
					/>
				</Item>

				{/*<Item>
          <SimpleCard style={{ margin: "5px" }} brand="monkey" />
        </Item>
        <Item>
          <SimpleCard style={{ margin: "5px" }} brand="monkey" />
        </Item>*/}
			</Carousel>
		</div>
	);
}
