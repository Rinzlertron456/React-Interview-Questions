import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import HomePage from "./components/HomePage";
import VaultForm from "./components/VaultForm";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/new-vault" element={<VaultForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
