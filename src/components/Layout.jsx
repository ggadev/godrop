import Header from "./Header/Header.jsx"
import LiveDrop from "./LiveDrop/LiveDrop.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import SiteLoader from "./SiteLoader.jsx";

function Layout() {
    return (
        <>
            <SiteLoader/>
            <LiveDrop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;