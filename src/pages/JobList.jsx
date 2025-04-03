import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { filterJobs } from "../utils/jobUtils";

// Sample data — move to API or mock file later
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
    const [searchTerm, setSearchTerm] = useState("");

    const filteredJobs = filterJobs(jobs, searchTerm);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

            <input
                type="text"
                placeholder="Search by title, company, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="space-y-6">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
