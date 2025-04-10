import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api/api.js';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchAllJobs() {
            try {
                const response = await fetchJobs();
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error.message);
            }
        }

        fetchAllJobs();
    }, []);

    return (
        <div>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.title}</strong> at {job.company} {'\u00A3'}
                        {job.salary?.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2
                        })}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
