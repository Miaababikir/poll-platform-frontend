import React from 'react';
import Layout from "../components/Layout";
import PollList from "../components/PollList";

const Home = () => {
    return (
        <Layout>
            <h2 className="text-2xl font-semibold">Latest Polls</h2>

            <PollList />

        </Layout>
    );
};

export default Home;