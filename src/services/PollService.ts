import {getHeaders, Http} from "../utils/Client";

export const getPolls = async (page: number) => {
    return Http.get(`/polls?page=${page}&limit=10`);
}

export const getCurrentUserPolls = () => {
  return Http.get("/profile/polls", {headers: getHeaders()});
}

export const savePoll = async (poll: any) => {
    return Http.post("/polls", poll, {headers: getHeaders()});
}

export const getPollById = (id: number) => {
    return Http.get(`/polls/${id}`, {headers: getHeaders()});
}