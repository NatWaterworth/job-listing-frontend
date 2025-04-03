import React from "react";
import { Link } from "react-router-dom";

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechFlow",
        location: "Remote",
        salary: "£40,000 - £50,000",
        postedDate: "2025-03-28",
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "CodeWorks",
        location: "London, UK",
        salary: "£50,000 - £60,000",
        postedDate: "2025-03-25",
    },
];

const JobList = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

            <div className="space-y-6">
                {jobs.map((job) => (
                    <Link
                        key={job.id}
                        to={`/jobs/${job.id}`}
                        className="block"
                    >
                        <div className="p-4 bg-white rounded-2xl shadow-md border hover:shadow-lg hover:bg-blue-50 transition-shadow duration-300">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-xl font-semibold">{job.title}</h2>
                                <span className="text-sm text-gray-500">{job.postedDate}</span>
                            </div>
                            <p className="text-gray-700">{job.company}</p>
                            <p className="text-gray-500">{job.location}</p>
                            <p className="text-green-600 font-medium">{job.salary}</p>
                        </div>
                        
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default JobList;
