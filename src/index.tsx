import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Create from "./pages/polls/Create";
import Home from "./pages/Home";
import {AuthProvider} from "./context/AuthProvider";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/polls/create" element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
