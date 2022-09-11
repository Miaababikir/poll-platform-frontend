import {Vote} from "../shared/interfaces/vote.interface";
import {getHeaders, Http} from "../utils/Client";


export const createVote = (vote: Vote) => {
    return Http.post("/votes", vote, {headers: getHeaders()})
}