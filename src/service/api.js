import axios from "axios";

export const api = axios.create({
    baseURL: 'https://59bc-160-20-194-18.ngrok-free.app',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Access-Control-Allow-Origin'] = '*';
    }
    return config;
});

api.interceptors.response.use((response) => {
    return response
});