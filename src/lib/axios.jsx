import { Axios } from "axios";

export const Http = new Axios({
    baseURL: import.meta.env.VITE_API_URL
});

console.log(import.meta.env)