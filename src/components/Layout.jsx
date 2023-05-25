import Header from "./Header/Header.jsx"
import Livedrop from "./LiveDrop/Livedrop.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Livedrop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;