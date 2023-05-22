import React from 'react';
import Header from "./Header/Header.jsx"
import Livedrop from "./Livedrop/Livedrop.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Livedrop/>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Layout;