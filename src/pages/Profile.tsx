import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {getCurrentUserPolls} from "../services/PollService";
import PollCard from "../components/PollCard";

const Profile = () => {

    const [polls, setPolls] = useState([]);

    useEffect(() => {
        getCurrentUserPolls()
            .then((response => setPolls(response.data)))
    }, []);

    return (
        <Layout>
            <div className="w-2/3 mx-auto">
                <h2 className="text-2xl font-semibold">Your Polls</h2>
                {polls.map(poll => (
                    <PollCard poll={poll} />
                ))}
            </div>

        </Layout>
    );
};

export default Profile;