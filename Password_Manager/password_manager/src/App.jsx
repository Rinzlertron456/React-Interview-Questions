import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import VaultRegistration from "./pages/VaultRegistration";
import VaultCredentials from "./pages/VaultCredentials";
import VaultLogin from "./pages/VaultLogin";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vault/:id" element={<VaultLogin />} />
          <Route path="/vaultRegister" element={<VaultRegistration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
