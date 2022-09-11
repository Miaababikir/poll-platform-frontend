import {Option} from "./option.interface";
import {Vote} from "./vote.interface";

interface VoteTotal {
    labels: string[];
    data: number[];
}

export interface Poll {
    id?: number,
    title: string,
    expireAt: string,
    options: Option[],
    vote?: Vote,
    votesTotal?: VoteTotal,
    createdAt?: string,
}