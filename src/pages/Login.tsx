import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-primary to-orange-500 font-nunito">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <img className="w-48 mx-auto" src="https://sabbar.com/wp-content/themes/sabbar-website-2/assets/images/logo-ar.svg" alt=""/>

                <form className="mt-6">
                    <div>
                        <label htmlFor="username"
                               className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                        <input type="text"
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                   className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        </div>

                        <input type="password"
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary rounded-md focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;