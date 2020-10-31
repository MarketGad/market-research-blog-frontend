import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: '100%',
		margin: '0'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12,
		padding: '0'
	}
});

const ProductCard = (props) => {
	const classes = useStyles();
	return (
		<Card
			className={classes.root}
			style={{
				backgroundImage: `url(${props.background})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				margin: '10px 0'
			}}
		>
			<CardContent style={{ position: 'relative', top: '-40px' }}>
				<div style={{ margin: '0' }}>
					<div className='secondary-content'>
						<Link
							style={{
								position: 'absolute',
								right: '40px'
							}}
						>
							<img
								src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348649/Theme/Upvote_Icon_tvffmk.png'
								width='50px'
							/>
						</Link>
						<div
							className='right-align '
							style={{
								top: '1em',
								fontSize: '20px',
								position: 'relative',
								color: 'white',
								borderBottom: '2px solid'
							}}
						>
							12
						</div>
					</div>

					<h5
						style={{
							textAlign: 'left',
							padding: '30px 0 20px 0',
							color: 'white'
						}}
					>
						<img src={props.logoUrl} height='30px' />
					</h5>
				</div>

				<Typography
					variant='h5'
					component='h2'
					className='prodcard-desc'
					style={{
						color: 'white',
						textAlign: 'right',
						height: '70px',
						fontSize: '15px',
						paddingLeft: '40%'
					}}
				>
					{props.desc}
				</Typography>
			</CardContent>
			<CardActions style={{ float: 'right' }}>
				<Button
					className='card-pdt'
					style={{
						backgroundColor: 'white',
						/* float: "right",*/
						maxWidth: '50px',
						maxHeight: '35px',
						minWidth: '50px',
						minHeight: '35px'
					}}
				>
					<TextsmsOutlinedIcon style={{ color: 'black' }} />
				</Button>
				<Button
					style={{
						backgroundColor: 'white',
						/*float: "right",*/
						maxWidth: '50px',
						maxHeight: '35px',
						minWidth: '50px',
						minHeight: '35px'
					}}
				>
					<SendOutlinedIcon style={{ color: 'black' }} />
				</Button>
			</CardActions>
		</Card>
	);
};
export default ProductCard;
