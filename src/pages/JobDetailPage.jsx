import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import { fetchJobById } from "../services/supabaseJobs";
import JobDetails from "../components/JobDetails";

const JobDetail = () => {
    const { id } = useParams();

    const [job, setJob] = useState([]);

    useEffect(() => {
        fetchJobById(id).then(setJob).catch(console.error);
    }, [id]);

    const { savedJobs, appliedJobs, saveJob } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSave = () => saveJob(job);
    const handleApply = () => navigate("/apply", { state: { job } });

    const isSaved = savedJobs.some(j => j.id === job.id);
    const isApplied = appliedJobs.some(j => j.id === job.id);

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
                    className={`px-4 py-2 rounded-xl transition ${isApplied
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                >
                    {isApplied ? "Applied" : "Apply Now"}
                </button>
            </div>
        </div>
    );
};

export default JobDetail;