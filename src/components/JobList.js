import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        const { data, error } = await supabase.from('jobs').select('*');
        if (error) throw error;
        return data;
    };

    useEffect(() => {
        async function getJobs() {
            try {
                const jobData = await fetchJobs();
                setJobs(jobData);
            } catch (err) {
                console.error("Failed to load jobs:", err);
            }
        }

        getJobs();
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
