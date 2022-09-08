import {Http} from "../utils/Client";


export const getPolls = async (page: number) => {
    return Http.get(`/polls?page=${page}&limit=5`);
}