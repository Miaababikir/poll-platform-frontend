import { formatDistanceToNow } from 'date-fns';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getPolls} from "../services/PollService";
import InfiniteScroll from 'react-infinite-scroller';

const PollList = () => {

    const [polls, setPolls] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const appendPolls = (items: any) => {
        setPolls((prev: any) => [...prev, ...items]);
    }

    const loadMore = () => {

        setIsLoading(true);

        getPolls(page + 1)
            .then(response => {
                if (response.data.items.length === 0) {
                    setIsLoading(false);
                    setCanLoadMore(false);
                    return;
                }

                setIsLoading(false);
                appendPolls(response.data.items);
                setPage(page + 1);

            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error)
            });
    }

    useEffect(() => {
        setIsLoading(true);
        getPolls(page)
            .then(response => {
                setIsLoading(false);
                setPolls(response.data.items);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    }, [])

    return (
        <div className="grid grid-cols-1 h-full">
            <InfiniteScroll initialLoad={false} loadMore={loadMore} hasMore={!isLoading && canLoadMore} loader={(
                <div className="loader">Loading...</div>
            )}>
                {polls.map((poll: any) => (
                    <div className="bg-white p-4 rounded shadow-lg relative mt-6" key={poll.id}>
                        <div
                            className="absolute -right-4 -top-4 px-2 py-1 bg-green-400 text-white text-xs font-bold rounded-full">80
                            Votes
                        </div>
                        <div>
                            <span className="px-4 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">Web Design</span>
                        </div>
                        <div className="mt-2">
                            {/*<img className="w-12 rounded-full" src="https://picsum.photos/200" alt="User Avatar"/>*/}
                            <Link className="font-semibold text-lg" to="#">{poll.title}</Link>
                            <div className="mt-2 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="w-6 rounded-full" src="https://picsum.photos/200" alt="User"/>
                                    <span className="ml-2 text-sm font-semibold">Mosab Ibrahim</span>
                                </div>
                                <span className="text-xs text-gray-400">{formatDistanceToNow(new Date(poll.createdAt))}</span>
                            </div>
                        </div>
                    </div>
                ))}

            </InfiniteScroll>
        </div>
    );
};

export default PollList;