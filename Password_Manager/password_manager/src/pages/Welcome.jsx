import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  };
  return (
    <>
      <div
        className="welcome-container"
        style={{ margin: "15rem auto 0px 37rem" }}
      >
        <h1>Greetings Owner!!</h1>
        <button
          className="btn btn-primary mx-5 my-4"
          onClick={() => handleClick()}
        >
          Got to Password Manager
        </button>
      </div>
    </>
  );
}

export default Welcome;
