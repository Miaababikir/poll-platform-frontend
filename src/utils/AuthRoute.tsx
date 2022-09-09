import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthProvider";
import {Navigate} from "react-router-dom";

const AuthRoute: React.FC<any> = ({children}: any) => {

    const {user} = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />
    }

    return children;
};

export default AuthRoute;