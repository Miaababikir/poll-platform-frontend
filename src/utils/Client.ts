import axios from "axios";
import {getByKey} from "./localStorage";

const config = {
    baseURL: "http://localhost:8080/api",
}

const user = getByKey('user', {});

export const Http = axios.create(config);

export const AuthHttp = axios.create({
    ...config,
    headers: {
        Authorization: `Bearer ${user.access_token || ''}`
    }
});