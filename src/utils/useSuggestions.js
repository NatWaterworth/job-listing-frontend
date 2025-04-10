export const useSuggestions = (jobs, searchInput) => {
    const allSuggestions = [
        ...new Set(
            jobs.flatMap((job) =>
                [job.title, job.company, job.location].filter(Boolean)
            )
        ),
    ];

    return allSuggestions.filter((s) =>
        s.toLowerCase().includes(searchInput.toLowerCase())
    );
};