import React, { useState } from "react";

const ApplicationForm = ({ jobTitle }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        cv: null,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Application Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border mt-8">
            <h2 className="text-2xl font-bold mb-4">
                Apply for {jobTitle}
            </h2>
            {submitted ? (
                <p className="text-green-600 font-medium">
                    Thanks for your application! We'll be in touch.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border p-2 rounded-lg"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Upload CV</label>
                        <input
                            type="file"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            className="w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Submit Application
                    </button>
                </form>
            )}
        </div>
    );
};

export default ApplicationForm;
