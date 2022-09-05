import {createContext, useState} from "react";
import {getByKey} from "../utils/localStorage";

const authState = {
    user: getByKey("user", undefined)
}

export const AuthContext = createContext((authState));

export const AuthProvider = ({children}: any) => {
    const [user] = useState(authState);

    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}