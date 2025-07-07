import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: { query: false }
});

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333/api',
    adapter: cache.adapter
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;