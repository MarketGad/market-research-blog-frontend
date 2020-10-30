import React from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';
import Button from '@material-ui/core/Button'


class Internshiplist extends React.Component {
	
	constructor (props) {
		super(props);
		
		this.state = {
			isExpandTrue: false,
			filter: ''
		}
		this.filterJobs = this.filterJobs.bind(this);
		this.handleReadMore = this.handleReadMore.bind(this);
	}

	filterJobs = (job) => {
		if (this.props.filter === '') {
			return true;
		} else {
			return this.props.filter === job.industry ? true : false;
		}
	};

	handleReadMore = () => {
		this.setState({
			isExpandTrue: true
		})
	}

	render(){

		var internships = this.props.internships.slice(0).reverse();
		internships = internships.filter(this.filterJobs);

		if(this.props.filter !== this.state.filter){
			this.setState({
				isExpandTrue: false,
				filter: this.props.filter
			})
		}

		if(this.state.isExpandTrue === false && internships.length > 5){
			internships = internships.slice(0,5);
		}

		const showInternships = internships.length ? (
			internships.map((internship, index) => {
				if (!/^https?:\/\//.test(internship.jobLink)) {
					let weblink = 'https://' + internship.jobLink;
					return <JobsandInternshipcard key={index} jobdetails={internship} weblink={weblink} />;
				} else return <JobsandInternshipcard key={index} jobdetails={internship} weblink={internship.jobLink} />;
			})
		) : (
			<div className='center'> Oops! No Internships To Show !! </div>
		);
		return (
			<div>
				<div>
					{this.props.internships[0] && (
						<div>
							<ul className='collection job-container' style={{ borderRadius: '7px' }}>
								{showInternships}
							</ul>
						</div>
					)}
					{this.props.internships.length === 0 && (
						<div style={{textAlign: 'center'}}>
							<FadingLoader loadno={3} />
						</div>
					)}
				</div>
				<div>
					{(this.props.internships.filter(this.filterJobs).length > 5 && this.state.isExpandTrue === false) ? (
						<div
							style={{
								textAlign: 'center'
							}}
						>
							<Button 
							variant="contained"
							onClick={this.handleReadMore}
							>Show More</Button>
						</div>
					):(
						<></>
					)}
				</div>
			</div>
		);
	}
};
export default Internshiplist;
