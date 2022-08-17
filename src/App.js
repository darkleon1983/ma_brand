import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Header_test } from "./Components/Header_test/index.jsx";
import Promo from "./Components/Promo";
import Portfolio from "./Components/Portfolio";
import AboutUs from "./Components/AboutUs/index.js";
import Services from "./Components/Services/index.js";
import Clients from "./Components/Clients/index.js";
import Collaboration from "./Components/Collaboration/index.js";
import Footer from "./Components/Footer/index.js";
import HeaderMobile from "./Components/HeaderMobile/index.js";
import Projects from "./Components/Projects/index.js";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index";

function App(props) {
  return (
    <div className="App">
      <HeaderMobile />
      <Header />
      <Header_test />
      <div>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="" element={<Home />} />
        </Routes>
      </div>
      <div>
        <hr />
      </div>
      <Footer />

      <div></div>
    </div>
  );
}

export default App;
