import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.imersaofx.daineldcs.com/",
    headers: {
        Authorization: "Bearer aGVsbG93b3JkbEBob3RtYWlsLmNvbQ=="
    }
})