import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Create from "./pages/polls/Create";
import Home from "./pages/Home";
import {AuthProvider} from "./context/AuthProvider";
import AuthRoute from "./utils/AuthRoute";
import Show from "./pages/polls/Show";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={
                        <AuthRoute>
                            <Profile/>
                        </AuthRoute>
                    }/>
                    <Route path="/polls/create" element={
                        <AuthRoute>
                            <Create/>
                        </AuthRoute>
                    }/>
                    <Route path="/polls/:id" element={
                        <AuthRoute>
                            <Show/>
                        </AuthRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>
);
