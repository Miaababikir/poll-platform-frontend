import React from 'react';
import Layout from "../../components/Layout";

const Create = () => {
    return (
        <Layout>
            <div className="p-4 w-2/3 mx-auto bg-white shadow rounded">
                <h2 className="text-xl font-bold">Create a Poll</h2>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet.</p>
                <form>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <span className="block text-sm font-medium text-gray-700">Username</span>
                            <input type="text"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div>
                            <span className="block text-sm font-medium text-gray-700">Expire At</span>
                            <input type="date" placeholder="Title"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="block text-sm font-medium text-gray-700">Poll Options</span>

                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="Enter option here"
                                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"/>
                            <input type="text" placeholder="Enter option here"
                                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"/>
                            <div className="flex items-center">
                                <button className="px-2 py-2 bg-gray-700 text-white rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="w-5 h-5">
                                        <path
                                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-right">
                        <button className="px-4 py-2 bg-primary text-white rounded-full">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;