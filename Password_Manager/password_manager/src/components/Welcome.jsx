import React from "react";
import HomePage from "./HomePage";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <>
      <div className="container text-center" style={{ marginTop: "15rem" }}>
        <h1>Greetings User</h1>
        <button
          className="btn btn-outline-primary"
          style={{ marginTop: "1.5rem" }}
          onClick={(e) => handleHome(e)}
        >
          Go to Home Page
        </button>
      </div>
    </>
  );
}

export default Welcome;
