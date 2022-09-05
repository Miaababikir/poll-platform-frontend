import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl py-4 flex justify-between items-center sm:px-6 lg:px-8">
                <div>
                    <img className="w-20"
                         src="https://sabbar.com/wp-content/themes/sabbar-website-2/assets/images/logo-en.svg" alt=""/>
                </div>
                <ul className="flex">
                    <li className="mx-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/login"
                              className="bg-primary px-6 py-1 text-white font-bold rounded-full">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;