import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Compare from "./pages/Compare";
import Features from "./pages/Features";

const App = () => {
  return (
    <div>
      <div className="sticky top-0 mb-3">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/features" element={<Features />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  );
};

export default App;
