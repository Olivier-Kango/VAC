import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Gallery,
  AOW,
  Projects,
  Services,
  Team,
  Contact,
} from "./pages/main";
import { Navbar, Footer } from "./components/main";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/AOW" element={<AOW />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
