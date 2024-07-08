import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AOS from "aos";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div>
        <div className="app">
          <Navbar />
          <div className="page">
            <Routes>
              <Route index path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/experience" Component={Experience} />
              <Route path="/work" Component={Work} />
              <Route path="/contact" Component={Contact} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
