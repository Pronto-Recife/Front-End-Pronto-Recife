import axios from "axios";

export const apiauth = axios.create({
    baseURL: 'https://prontorecifeauth-dev.up.railway.app',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})
