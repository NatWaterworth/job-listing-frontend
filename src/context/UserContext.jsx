import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [savedJobs, setSavedJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const saveJob = (job) => {
        if (!savedJobs.find(j => j.id === job.id)) {
            setSavedJobs([...savedJobs, job]);
        }
    };

    const applyToJob = (job) => {
        console.log("applying to Job: ", job);
        if (!appliedJobs.find(j => j.id === job.id)) {
            setAppliedJobs([...appliedJobs, job]);
        }
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
