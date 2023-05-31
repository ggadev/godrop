import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProvablyFair from "./pages/ProvablyFair/ProvablyFair.jsx";
import SkinBase from "./pages/SkinBase/SkinBase.jsx";
import Collections from "./pages/Collections/Collections.jsx";
import Upgrader from "./pages/Upgrader/Upgrader.jsx";
import ScratchCards from "./pages/ScratchCards/ScratchCards.jsx";
import LuckyShot from "./pages/LuckyShot/LuckyShot.jsx";
import DailyFree from "./pages/DailyFree/DailyFree.jsx";
import Giveaways from "./pages/Giveaways/Giveaways.jsx";
import Collection from "./pages/Collections/Collection.jsx";
import SkinBaseListing from "./pages/SkinBase/SkinBaseListing.jsx";
import SkinBaseHome from "./pages/SkinBase/SkinBaseHome.jsx";
import SkinBaseSkin from "./pages/SkinBase/SkinBaseSkin.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/provably-fair" element={<ProvablyFair/>}></Route>
                <Route path="/skinbase" element={<SkinBaseHome/>}></Route>
                <Route element={<SkinBase/>}>
                    <Route path="/skinbase/weapon/:weaponUrl" element={<SkinBaseListing/>}></Route>
                    <Route path="/skinbase/skin/:skinUrl" element={<SkinBaseSkin/>}></Route>
                </Route>
                <Route path="/collections" element={<Collections/>}></Route>
                <Route path="/collections/:url" element={<Collection/>}></Route>
                <Route path="/upgrader" element={<Upgrader/>}></Route>
                <Route path="/scratch-cards" element={<ScratchCards/>}></Route>
                <Route path="/lucky-shot" element={<LuckyShot/>}></Route>
                <Route path="/daily-free" element={<DailyFree/>}></Route>
                <Route path="/giveaways" element={<Giveaways/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
