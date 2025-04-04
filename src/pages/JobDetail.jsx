import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm";

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechFlow",
        location: "Remote",
        salary: "£40,000 - £50,000",
        postedDate: "2025-03-28",
        description: "We're looking for a skilled frontend developer to join our team...",
        requirements: "Experience with React, Tailwind, and JavaScript required."
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "CodeWorks",
        location: "London, UK",
        salary: "£50,000 - £60,000",
        postedDate: "2025-03-25",
        description: "Join our backend team to work on scalable APIs and services.",
        requirements: "Experience with Node.js, databases, and RESTful APIs."
    }
];

const JobDetail = () => {
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));

    if (!job) {
        return <p className="p-6 text-red-600">Job not found.</p>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <p className="text-gray-700 mb-1">{job.company}</p>
            <p className="text-gray-500 mb-1">{job.location}</p>
            <p className="text-green-600 font-medium mb-4">{job.salary}</p>
            <p className="text-sm text-gray-400 mb-6">Posted on: {job.postedDate}</p>

            <div className="bg-white p-4 rounded-xl shadow-md border mb-4">
                <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                <p>{job.description}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md border">
                <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                <p>{job.requirements}</p>
            </div>
            <ApplicationForm jobTitle={job.title} />
        </div>
    );
};

export default JobDetail;