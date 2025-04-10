import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import { fetchJobs } from '../api/api.js';
import JobDetails from "../components/JobDetails";

const JobDetail = () => {
    const { id } = useParams();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchAllJobs() {
            try {
                const response = await fetchJobs();
                setJobs(response.data);
                console.log(jobs)
            } catch (error) {
                console.error('Error fetching jobs:', error.message);
            }
        }

        fetchAllJobs();
    }, []);

    const job = jobs.find(job => job.id === parseInt(id));

    const { savedJobs, appliedJobs, saveJob } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSave = () => saveJob(job);
    const handleApply = () => navigate("/apply", { state: { job } });

    const isSaved = savedJobs.includes(job);
    const isApplied = appliedJobs.includes(job);

    if (!job) {
        return <p className="p-6 text-red-600">Job not found.</p>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <JobDetails
                job={job}
            />
            <div className="flex gap-4 mt-6">
                <button
                    disabled={isSaved}
                    onClick={handleSave}
                    className={`px-4 py-2 rounded-xl transition ${isSaved
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    {isSaved ? "Saved" : "Save Job"}
                </button>
                <button
                    disabled={isApplied}
                    onClick={handleApply}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobDetail;