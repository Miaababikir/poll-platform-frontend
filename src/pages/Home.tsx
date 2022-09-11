import React from 'react';
import Layout from "../components/Layout";
import InfiniteScroll from "react-infinite-scroller";
import PollCard from "../components/PollCard";
import {useGetPolls} from "../hooks/uesGetPolls";

const Home = () => {

    const [polls, isLoading, canLoadMore, loadPolls] = useGetPolls();

    return (
        <Layout>
            <div className="w-2/3 mx-auto">
                <h2 className="text-2xl font-semibold">Latest Polls</h2>
                <div className="grid grid-cols-1">
                    <InfiniteScroll initialLoad={true} loadMore={loadPolls} hasMore={!isLoading && canLoadMore}
                                    loader={(
                                        <div className="loader" key={0}>Loading...</div>
                                    )}>
                        {polls.map((poll: any) => (
                            <PollCard poll={poll} key={poll.id}/>
                        ))}

                    </InfiniteScroll>
                </div>
            </div>

        </Layout>
    );
};

export default Home;