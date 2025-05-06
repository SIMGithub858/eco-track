import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"; 
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "/src/components/Navbar.jsx";

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
