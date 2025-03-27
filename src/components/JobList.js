import React, { useEffect, useState } from 'react';
import { getJobs } from '../services/jobService';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const data = await getJobs(); // Defaults: no filters
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error.message);
            }
        }

        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.title}</strong> at {job.company} – £{job.salary?.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                        })}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
