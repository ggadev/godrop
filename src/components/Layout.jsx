import Header from "./Header/Header.jsx"
import LiveDrop from "./LiveDrop/LiveDrop.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import SiteLoader from "./SiteLoader.jsx";
import Notifications from "./Notifications/Notifications.jsx";

function Layout() {

    return (
        <>
            <SiteLoader/>
            <Notifications/>
            <LiveDrop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;