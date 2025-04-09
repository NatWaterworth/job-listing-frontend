import React from "react";
import ApplicationForm from "../components/ApplicationForm";

const ApplicationPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Apply for This Job</h1>
            <ApplicationForm />
        </div>
    );
};

export default ApplicationPage;
