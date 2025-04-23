import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [savedJobs, setSavedJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const saveJob = (job) => {
        if (!findJob(job, savedJobs)) {
            setSavedJobs([...savedJobs, job]);
        }
    };

    const applyToJob = (job) => {
        console.log("applying to Job: ", job);
        if (!findJob(job, appliedJobs)) {
            setAppliedJobs([...appliedJobs, job]);
        }
    };

    const findJob = (job, jobs) => {
        jobs.find(j => j.id === job.id)
    };

    useEffect(() => {
        console.log("Updated savedJobs:", savedJobs);
    }, [savedJobs]);

    useEffect(() => {
        console.log("Updated appliedJobs:", appliedJobs);
    }, [appliedJobs]);

    return (
        <UserContext.Provider value={{ savedJobs, appliedJobs, saveJob, applyToJob }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
