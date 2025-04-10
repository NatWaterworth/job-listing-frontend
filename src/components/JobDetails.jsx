import React from "react";
import { toTitleCase } from "../utils/stringFormat";
import { formatDate } from "../utils/formatDate";

const JobDetails = ({
    job
}) => {
    if (!job) {
        return <p className="p-6 text-red-600">Job not found.</p>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{toTitleCase(job.title)}</h1>
            <p className="text-gray-700 mb-1">{toTitleCase(job.company)}</p>
            <p className="text-gray-500 mb-1">{toTitleCase(job.location)}</p>
            <p className="text-green-600 font-medium">
                &pound;{job.salary?.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                })}
            </p>
            <p className="text-sm text-gray-400 mb-6">Posted on: {formatDate(job.datePosted)}</p>

            <div className="bg-white p-4 rounded-xl shadow-md border mb-4">
                <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                <p>{job.description}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md border">
                <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                <p>{job.requirements}</p>
            </div>          
        </div>
    );
};

export default JobDetails;
