import React, { useState } from "react";
import JobCard from "../components/JobCard";
import SuggestionsDropdown from "../components/SuggestionsDropdown";
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
    const [searchInput, setSearchInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");   

    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredJobs = filterJobs(jobs, searchTerm);

    const allSuggestions = [...new Set(
        jobs.flatMap((job) => [job.title, job.company, job.location])
    )];
    const filteredSuggestions = allSuggestions.filter((s) =>
        s.toLowerCase().includes(searchInput.toLowerCase())
    );


    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

            <div className="flex items-center gap-2 mb-6">
                <div className="relative flex-grow">

                    {/* Search Field */}
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Search by title, company, or location"
                    />

                    {/* Suggestions Dropdown */}
                    {showSuggestions && filteredSuggestions.length > 0 && (
                        <SuggestionsDropdown
                            suggestions={filteredSuggestions}
                            onSelect={(suggestion) => {
                                setSearchInput(suggestion);
                                setShowSuggestions(false);
                            }}
                        />
                    )}
                </div>

                {/* Search Button */}
                <button
                    onClick={() => setSearchTerm(searchInput)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </div>

            <div className="space-y-6">
                {filteredJobs.map((job) => (                  
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
