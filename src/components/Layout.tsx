import React from 'react';

const Layout = ({children}: any) => {
    return (
        <div className="min-h-screen bg-slate-100 font-nunito">
            {children}
        </div>
    );
};

export default Layout;