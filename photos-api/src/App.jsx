import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import "./App.css";
import Album from "./components/Album";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  );
}

export default App;
