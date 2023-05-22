import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProvablyFair from "./pages/ProvablyFair/ProvablyFair.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/provably-fair" element={<ProvablyFair/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
