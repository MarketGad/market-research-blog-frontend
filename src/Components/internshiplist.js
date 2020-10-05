import React, { useEffect } from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';

const Internshiplist = () => {
	const [ internships, setInternships ] = React.useState('');
	const loadProducts = async () => {
		try {
			const res = await fetch('https://serieux-saucisson-31787.herokuapp.com/api/jobs/internship');
			const data = await res.json();
			setInternships(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);

	const showInternships = internships.length ? (
		internships.map((internship, index) => {
			if (!/^https?:\/\//.test(internship.jobLink)) {
				let weblink = 'https://' + internship.jobLink;
				return <JobsandInternshipcard key={index} jobdetails={internship} weblink={weblink} />;
			} else return <JobsandInternshipcard key={index} jobdetails={internship} weblink={internship.jobLink} />;
		})
	) : (
		<div className='center'> Loading... </div>
	);
	return (
		<div>
			{internships[0] && <div>{showInternships}</div>}
			{!internships[0] && (
				<div>
					<FadingLoader loadno={3} />
				</div>
			)}
		</div>
	);
};
export default Internshiplist;
