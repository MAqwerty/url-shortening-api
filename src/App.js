import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout-NAV/Layout";
import Home from "./components/Home.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx"
import Resources from "./components/Resources.jsx"
import NoPage from "./components/NoPage.jsx";

function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route index element={<Home />} />  
        <Route path="Features" element={<Features />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Resources" element={<Resources />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
export default App;
