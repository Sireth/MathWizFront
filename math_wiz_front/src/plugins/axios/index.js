import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://0.0.0.0:8000/api/evaluation/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
