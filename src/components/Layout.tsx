import React from 'react';
import Nav from "./Nav";

const Layout = ({children}: any) => {
    return (
        <div className="min-h-screen bg-slate-100 text-gray-800 font-nunito">
            <Nav/>
            <main className="mx-auto max-w-7xl py-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;