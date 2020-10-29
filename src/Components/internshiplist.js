import React from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';

class Internshiplist extends React.Component {
	
	constructor (props) {
		super(props);
		this.filterJobs = this.filterJobs.bind(this);
	}

	filterJobs = (job) => {
		if (this.props.filter === '') {
			return true;
		} else {
			return this.props.filter === job.industry ? true : false;
		}
	};

	render(){

		var internships = this.props.internships.slice(0).reverse();
		internships = internships.filter(this.filterJobs);

		const showInternships = internships.length ? (
			internships.map((internship, index) => {
				if (!/^https?:\/\//.test(internship.jobLink)) {
					let weblink = 'https://' + internship.jobLink;
					return <JobsandInternshipcard key={index} jobdetails={internship} weblink={weblink} />;
				} else return <JobsandInternshipcard key={index} jobdetails={internship} weblink={internship.jobLink} />;
			})
		) : (
			<div className='center'> Oops! No Jobs To Show !! </div>
		);
		return (
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
		);
	}
};
export default Internshiplist;
