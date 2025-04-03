import React, { useState } from "react";
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
    const [searchTerm, setSearchTerm] = useState("");           // Actual term used for filtering
    const [pendingSearchTerm, setPendingSearchTerm] = useState(""); // What the user is typing

    const filteredJobs = jobs.filter((job) =>
        `${job.title} ${job.company} ${job.location}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

            {/* Search Input and Button */}
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Search by title, company, or location"
                    value={pendingSearchTerm}
                    onChange={(e) => setPendingSearchTerm(e.target.value)}
                    className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={() => setSearchTerm(pendingSearchTerm)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </div>

            {/* Job List */}
            <div className="space-y-6">
                {filteredJobs.map((job) => (
                    <div
                        key={job.id}
                        className="p-4 bg-white rounded-2xl shadow-md border border-gray-200 hover:bg-blue-50 transition"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold">{job.title}</h2>
                            <span className="text-sm text-gray-500">{job.postedDate}</span>
                        </div>
                        <p className="text-gray-700">{job.company}</p>
                        <p className="text-gray-500">{job.location}</p>
                        <p className="text-green-600 font-medium">{job.salary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
