import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useLocation } from "react-router-dom";
import { fetchJobById } from "../services/supabaseJobs";

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        coverLetter: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [cvFile, setCvFile] = useState(null);
    const [coverLetterFile, setCoverLetterFile] = useState(null);

    const { applyToJob } = useContext(UserContext);
    const location = useLocation();
    const job = location.state?.job;

    const handleApply = () => applyToJob(job);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Simulate sending data
        console.log("Submitted Application:", {
            ...formData,
            cvFile,
            coverLetterFile,
        });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="p-6 max-w-xl mx-auto text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Application Submitted!</h1>
                <p>Thank you for applying. We'll be in touch soon.</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-xl mt-6 mx-auto bg-white shadow rounded-xl">
            <h1 className="text-2xl font-bold mb-4">Job Application</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* CV Upload */}
                <div>
                    <label className="block font-medium mb-1">Upload CV</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setCvFile(e.target.files[0])}
                        className="w-full border p-2 rounded bg-white"
                    />
                    {cvFile && <p className="text-sm mt-1 text-gray-500">Selected: {cvFile.name}</p>}
                </div>

                {/* Optional Cover Letter Upload */}
                <div>
                    <label className="block font-medium mb-1">Upload Cover Letter (optional)</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setCoverLetterFile(e.target.files[0])}
                        className="w-full border p-2 rounded bg-white"
                    />
                    {coverLetterFile && <p className="text-sm mt-1 text-gray-500">Selected: {coverLetterFile.name}</p>}
                </div>

                <button
                    type="submit"
                    onClick={handleApply}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
