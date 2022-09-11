import React from 'react';
import Nav from "./Nav";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const Layout = ({children}: any) => {
    return (
        <div className="min-h-screen bg-slate-100 text-gray-800 font-nunito">
            <Nav/>
            <main className="mx-auto max-w-7xl p-4">
                {children}
            </main>
            <ToastContainer />
        </div>
    );
};

export default Layout;