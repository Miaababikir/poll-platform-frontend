import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";

const Nav = () => {

    const {user} = useContext(AuthContext);
    console.log({user});
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
                    {user &&
                        <li className="mx-2">
                            <Link to="/">Profile</Link>
                        </li>
                    }
                    <li className="mx-2">
                        {!user ?
                            <Link to="/login"
                                  className="bg-primary px-6 py-1 text-white font-bold rounded-full">Login</Link> :
                            <Link to="/polls/create"
                                  className="bg-primary px-6 py-1 text-white font-bold rounded-full">Create a
                                Poll</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;