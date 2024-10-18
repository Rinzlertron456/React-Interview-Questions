import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleNewVault = (e) => {
    e.preventDefault();
    navigate("/new-vault");
  };
  const handleQuit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h2>Welcome to SanVin Password Manager</h2>
        <p className="mt-5">
          SanVin Password Manager is a simple password manager app designed to
          help you secure your sensitive data. It offers features like password
          generation, password hashing, and secure storage of passwords.
        </p>
        <h3 className="mt-5">What brings you here?</h3>
        <div className="btn-container mt-5">
          <button
            className="btn btn-outline-success vault"
            style={{ marginRight: "30px" }}
            onClick={(e) => handleNewVault(e)}
          >
            Create a new password vault
          </button>
          <button
            className="btn btn-outline-danger exit"
            onClick={(e) => handleQuit(e)}
          >
            Quit
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
