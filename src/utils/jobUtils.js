export const filterJobs = (jobs, term) => {
    return jobs.filter((job) =>
        `${job.title} ${job.company} ${job.location}`
            .toLowerCase()
            .includes(term.toLowerCase())
    );
};
