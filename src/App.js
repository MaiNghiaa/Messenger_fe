import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desktop from "./Components/Login/Desktop/Desktop";
import Features from "./Components/Login/Features/Features";
import Login from "../src/Page/Login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/features" element={<Features />} />
        <Route path="/Desktop" element={<Desktop />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
