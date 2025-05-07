import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';


import Home from "./pages/Home"; 
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/NavBar.jsx";


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
