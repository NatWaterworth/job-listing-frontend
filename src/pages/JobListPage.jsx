import React, { useState, useEffect } from "react";

import JobCard from "../components/JobCard";
import SuggestionsDropdown from "../components/SuggestionsDropdown";
import { fetchJobs } from '../api/api.js';

import { filterJobs } from "../utils/jobUtils";
import { useSuggestions } from "../utils/useSuggestions";

const JobList = () => {

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

    const [searchInput, setSearchInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");   

    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredJobs = filterJobs(jobs, searchTerm);

    const filteredSuggestions = useSuggestions(jobs, searchInput);

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
