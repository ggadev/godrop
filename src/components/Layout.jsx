import Header from "./Header/Header.jsx"
import LiveDrop from "./LiveDrop/LiveDrop.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <LiveDrop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;