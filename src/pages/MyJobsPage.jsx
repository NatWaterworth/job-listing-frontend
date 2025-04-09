import React, { useContext, useState } from "react";
import JobCard from "../components/JobCard";
import { UserContext } from "../context/UserContext";

const MyJobs = () => {
    const { savedJobs, appliedJobs } = useContext(UserContext);
    const [activeTab, setActiveTab] = useState("saved");

    const jobsToShow = activeTab === "saved" ? savedJobs : appliedJobs;

    console.log("Saved jobs:", savedJobs);
    console.log("Applied jobs:", appliedJobs);
    console.log("jobsToShow", jobsToShow);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">My Jobs</h1>

            <div className="flex gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-xl ${activeTab === "saved" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => setActiveTab("saved")}
                >
                    Saved Jobs
                </button>
                <button
                    className={`px-4 py-2 rounded-xl ${activeTab === "applied" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => setActiveTab("applied")}
                >
                    Applied Jobs
                </button>
            </div>

            <div className="space-y-4">
                {jobsToShow.length > 0 ? (
                    jobsToShow.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                    <p>No jobs found</p>
                )}
            </div>
        </div>
    );
};

export default MyJobs;
