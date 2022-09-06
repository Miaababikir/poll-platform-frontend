import {createContext, useReducer} from "react";
import {getByKey} from "../utils/localStorage";

type StateType = {
    user: any,
    dispatch?: any
}

const initialState: StateType = {
    user: getByKey('user', null)
}

export const AuthContext = createContext(initialState);

export const authReducer = (state: StateType, action: any): StateType => {
    switch (action.type) {
        case 'LOGIN': {
            return {user: action.payload}
        }
        default:
            return state;
    }
}

export const AuthProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}