import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Compare from "./pages/Compare";
import Features from "./pages/Features";

const App = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="sticky top-0 mb-3" style={{ zIndex: 1000 }}>
          <Navbar />
        </div>
        <div className="max-w-screen-xl">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/features" element={<Features />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
