import React from 'react';
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Layout>
            <Nav/>

            <main className="mx-auto max-w-7xl py-4">
                <h2 className="text-2xl font-semibold">Latest Polls</h2>

                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-4 rounded shadow-lg relative">
                        <div className="absolute -right-4 -top-4 px-3 py-1 bg-green-400 text-white text-sm font-bold rounded-full">80 Votes</div>
                        <div>
                            <span className="px-4 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">Web Design</span>
                        </div>
                        <div className="mt-2">
                            {/*<img className="w-12 rounded-full" src="https://picsum.photos/200" alt="User Avatar"/>*/}
                            <Link className="font-semibold text-lg" to="#">Top web frameworks this year</Link>
                            <div className="mt-2 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="w-6 rounded-full" src="https://picsum.photos/200" alt="User"/>
                                    <span className="ml-2 text-sm font-semibold">Mosab Ibrahim</span>
                                </div>
                                <span className="text-xs text-gray-400">2 Hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    );
};

export default Home;