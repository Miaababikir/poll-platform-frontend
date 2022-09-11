import axios from "axios";
import {getByKey} from "./localStorage";

const config = {
    baseURL: "http://localhost:8080/api",
}

export const Http = axios.create(config);

export const getHeaders = () => {
    const user = getByKey('user', {});

    return {
        Authorization: `Bearer ${user.access_token || ''}`
    }
}