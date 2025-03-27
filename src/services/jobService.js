import axios from 'axios';

const API_BASE_URL = 'https://localhost:7158/api/Job'; // Adjust port if your backend uses a different one

export const getJobs = async (search, page, pageSize, sortBy, desc) => {
    const response = await axios.get(API_BASE_URL, {
        params: {
            search,
            page,
            pageSize,
            sortBy,
            desc,
        },
    });

    return response.data;
};
