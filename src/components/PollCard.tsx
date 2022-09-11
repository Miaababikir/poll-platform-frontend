import React from 'react';
import {Link} from "react-router-dom";
import {formatDistanceToNow} from "date-fns";

const PollCard = ({poll}: any) => {
    return (
        <div className="bg-white p-4 rounded shadow-lg mt-6" key={poll.id}>
            <div>
                <Link className="font-semibold text-lg" to={`/polls/${poll.id}`}>{poll.title}</Link>
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-6 rounded-full" src={`https://picsum.photos/200?random=${poll.id}`} alt="User"/>
                        <span className="ml-2 text-sm font-semibold">Mosab Ibrahim</span>
                    </div>
                    <span
                        className="text-xs text-gray-400">{formatDistanceToNow(new Date(poll.createdAt))}</span>
                </div>
            </div>
        </div>
    );
};

export default PollCard;