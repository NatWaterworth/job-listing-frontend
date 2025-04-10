import axios from 'axios';

const API_BASE_URL = "http://localhost:5180/api"; // replace with your actual API base URL

export const fetchJobs = () => axios.get(`${API_BASE_URL}/job`);
export const fetchJobById = (id) => axios.get(`${API_BASE_URL}/job/${id}`);
export const applyToJob = (jobId, applicationData) =>
    axios.post(`${API_BASE_URL}/job/${jobId}/apply`, applicationData);
