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
import SkinBaseListing from "./pages/SkinBase/SkinBaseListing.jsx";
import SkinBaseHome from "./pages/SkinBase/SkinBaseHome.jsx";
import SkinBaseSkin from "./pages/SkinBase/SkinBaseSkin.jsx";
import Collection from "./pages/Collection/Collection.jsx";
import {NotificationProvider} from "./contexts/NotificationContext.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import Account from "./pages/Account/Account.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import ProvablyFairConfiguration from "./pages/ProvablyFair/ProvablyFairConfiguration.jsx";
import ProvablyFairVerify from "./pages/ProvablyFair/ProvablyFairVerify.jsx";
import ProvablyFairAlgorithm from "./pages/ProvablyFair/ProvablyFairAlgorithm.jsx";
import {ModalsProvider} from "./contexts/ModalsContext.jsx";

function App() {

  return (
      <ModalsProvider>
          <NotificationProvider>
              <AuthProvider>
                  <BrowserRouter>
                      <Routes>
                          <Route element={<Layout/>}>
                              <Route path="/" element={<Home/>}></Route>
                              <Route path="/provably-fair" element={<ProvablyFair/>}>
                                  <Route index element={<ProvablyFairConfiguration/>}></Route>
                                  <Route path="/provably-fair/verify-roll" element={<ProvablyFairVerify/>}></Route>
                                  <Route path="/provably-fair/algorithm" element={<ProvablyFairAlgorithm/>}></Route>
                              </Route>
                              <Route path="/skinbase" element={<SkinBaseHome/>}></Route>
                              <Route element={<SkinBase/>}>
                                  <Route path="/skinbase/weapon/:weaponUrl" element={<SkinBaseListing/>}></Route>
                                  <Route path="/skinbase/skin/:skinUrl" element={<SkinBaseSkin/>}></Route>
                              </Route>
                              <Route path="/collections" element={<Collections/>}></Route>
                              <Route path="/collection/:collectionUrl" element={<Collection/>}></Route>
                              <Route path="/upgrader" element={<Upgrader/>}></Route>
                              <Route path="/scratch-cards" element={<ScratchCards/>}></Route>
                              <Route path="/lucky-shot" element={<LuckyShot/>}></Route>
                              <Route path="/daily-free" element={<DailyFree/>}></Route>
                              <Route path="/giveaways" element={<Giveaways/>}></Route>
                              <Route path="/account" element={<Account/>}></Route>
                              <Route path="/admin" element={<Admin/>}></Route>
                          </Route>
                      </Routes>
                  </BrowserRouter>
              </AuthProvider>
          </NotificationProvider>
      </ModalsProvider>
  )
}

export default App
