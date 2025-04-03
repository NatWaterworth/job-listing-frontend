export const useSuggestions = (jobs, input) => {
    const all = [...new Set(jobs.flatMap(job => [job.title, job.company, job.location]))];
    return all.filter((s) => s.toLowerCase().includes(input.toLowerCase()));
};
