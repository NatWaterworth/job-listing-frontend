import React from "react";
import { Link } from "react-router-dom";
import { toTitleCase } from "../utils/stringFormat";

const JobCard = ({ job }) => (
    <Link to={`/jobs/${job.id}`} className="block">
        <div className="p-4 bg-white rounded-2xl shadow-md border hover:bg-blue-50 transition">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{toTitleCase(job.title)}</h2>
                <span className="text-sm text-gray-500">{job.postedDate}</span>
            </div>
            <p className="text-gray-700">{toTitleCase(job.company)}</p>
            <p className="text-gray-500">{toTitleCase(job.location)}</p>
            <p className="text-green-600 font-medium">
                &pound;{job.salary?.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                })}
            </p>

        </div>
    </Link>
);

export default JobCard;
