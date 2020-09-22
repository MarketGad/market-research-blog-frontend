import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => {
	let width = '90%';
	let height = '100';
	return (
		<div>
			<ContentLoader
				viewBox={`0 0 ${width} ${height} preserveAspectRatio="none"`}
				height={height}
				width={width}
				speed={2}
				{...props}
			>
				{props.imagetype === 'circle' ? (
					<circle cx='60' cy='45' r='30' />
				) : (
					<rect x='20' y='20' rx='5' ry='5' width='64' height='63' />
				)}
				<rect x='105' y='20' rx='5' ry='5' width='25%' height='12' />
				<rect x='105' y='40' rx='5' ry='5' width='50%' height='12' />
				<rect x='105' y='60' rx='5' ry='5' width='80%' height='12' />
			</ContentLoader>
			<br />
		</div>
	);
};

const ImageList = (props) => (
	<React.Fragment>
		{Array(5)
			.fill('')
			.map((e, i) => (
				<Loader screen='desktop' key={i} style={{ opacity: Number(2 / i).toFixed(1) }} {...props} />
			))}
	</React.Fragment>
);

export default ImageList;
