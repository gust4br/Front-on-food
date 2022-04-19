import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.imersaofx.danieldcs.com/",
    headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
    }
})