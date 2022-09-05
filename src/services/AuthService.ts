import {Http} from "../utils/Client";


export const login = (username: any, password: any) => {
    return Http.post("/auth/login", {username, password});
}