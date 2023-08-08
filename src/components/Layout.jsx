import Header from "./Header/Header.jsx"
import LiveDrop from "./LiveDrop/LiveDrop.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import SiteLoader from "./SiteLoader.jsx";
import Notifications from "./Notifications/Notifications.jsx";
import DropModal from "../modals/DropModal/DropModal.jsx";
import ClientSeedModal from "../modals/ProvablyFair/ClientSeedModal.jsx";
import Modals from "../modals/Modals.jsx";

function Layout() {
    return (
        <>
            <SiteLoader/>
            {/*<ClientSeedModal/>*/}
            <Modals/>
            <Notifications/>
            <LiveDrop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;