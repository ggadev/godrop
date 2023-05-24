import Header from "./Header/Header.jsx"
import Livedrop from "./Livedrop/Livedrop.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Livedrop/>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;