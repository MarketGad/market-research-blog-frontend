import React, { useEffect } from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';

const Joblist = () => {
	const [ jobs, setJobs ] = React.useState('');
	const loadProducts = async () => {
		try {
			const res = await fetch('https://serieux-saucisson-31787.herokuapp.com/api/jobs/full-time');
			const data = await res.json();
			setJobs(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);

	const showJobs = jobs.length ? (
		jobs.map((job, index) => {
			if (!/^https?:\/\//.test(job.jobLink)) {
				let weblink = 'https://' + job.jobLink;
				return <JobsandInternshipcard key={index} jobdetails={job} weblink={weblink} />;
			} else return <JobsandInternshipcard key={index} jobdetails={job} weblink={job.jobLink} />;
		})
	) : (
		<div className='center'> Loading... </div>
	);
	return (
		<div>
			{jobs[0] && <div>{showJobs}</div>}
			{!jobs[0] && (
				<div>
					<FadingLoader loadno={3} />
				</div>
			)}
		</div>
	);
};

export default Joblist;
