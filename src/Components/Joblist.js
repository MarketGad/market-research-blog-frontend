import React from 'react';
import FadingLoader from './FadingLoader';
import JobsandInternshipcard from './JobsandInternshipcard';

const Joblist = (props) => {
	const jobs = props.jobs;
	jobs.reverse()
	var DD_ARR = [];

	for (var i = 0; i < jobs.length; ) {
		if (jobs[i].createdAt != undefined) {
			var date = jobs[i].createdAt.split('T')[0];
			var arr = [ { date: date } ];

			while (date === jobs[i].createdAt.split('T')[0]) {
				arr.push(jobs[i]);
				i++;
				if (i >= jobs.length) break;
			}
			DD_ARR.push(arr);
		} else {
			var arr = [ { date: 'OLDER' } ];
			while (i < jobs.length) {
				arr.push(jobs[i]);
				i++;
			}
			DD_ARR.push(arr);
		}
	}

	const DateCard = (prop) => {
		return (
			<div>
				<h5
					style={{
						backgroundColor: '#dbdbdb',
						padding: '10px',
						margin: '0'
					}}
				>
					{prop.date}
				</h5>
			</div>
		);
	};

	const ShowJobsDateWise = DD_ARR.length ? (
		DD_ARR.map((list, index) => {
			const show = list.splice(1).map((job, index) => {
				if (!/^https?:\/\//.test(job.jobLink)) {
					let weblink = 'https://' + job.jobLink;
					return <JobsandInternshipcard key={index} jobdetails={job} weblink={weblink} />;
				} else {
					return <JobsandInternshipcard key={index} jobdetails={job} weblink={job.jobLink} />;
				}
			});
			return (
				<div>
					<DateCard date={list[0].date} />
					{show}
				</div>
			);
		})
	) : (
		<div className='center'> Loading... </div>
	);

	// const showJobs = props.jobs.length ? (
	// 	props.jobs.map((job, index) => {
	// 		if (!/^https?:\/\//.test(job.jobLink)) {
	// 			let weblink = 'https://' + job.jobLink;
	// 			return <JobsandInternshipcard key={index} jobdetails={job} weblink={weblink} />;
	// 		} else return <JobsandInternshipcard key={index} jobdetails={job} weblink={job.jobLink} />;
	// 	})
	// ) : (
	// 	<div className='center'> Loading... </div>
	// );
	return (
		<div>
			{props.jobs[0] && (
				<div>
					<ul className='collection job-container' style={{ borderRadius: '7px' }}>
						{ShowJobsDateWise}
					</ul>
				</div>
			)}
			{props.jobs.length === 0 && (
				<div>
					<FadingLoader loadno={3} />
				</div>
			)}
		</div>
	);
};

export default Joblist;
