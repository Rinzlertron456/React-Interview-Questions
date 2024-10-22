import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container text-center" style={{ marginTop: "7rem" }}>
        <h1 className="mb-5">Welcome to SanVin Password Manager</h1>
        <p className="mb-5">
          In this application, you will be able to store and manage your
          passwords securely. You can register a new vault, login to an existing
          vault, and create and manage passwords.
        </p>
        <h5 className="mb-5">How can we be of service to you?</h5>
        <button
          className="btn btn-primary mx-5 my-4"
          onClick={() => navigate("/vault/:id")}
        >
          Login to an existing vault
        </button>
        <button
          className="btn btn-primary mx-5 my-4"
          onClick={() => navigate("/vaultRegister")}
        >
          Register a new vault
        </button>
        <button
          className="btn btn-primary mx-5 my-4"
          onClick={() => navigate("/vaultPasswordChange")}
        >
          Change Vault Password
        </button>
        <button
          className="btn btn-primary mx-5 my-4"
          onClick={() => navigate("/vaultCredentials")}
        >
          Fetch Vault Credentials
        </button>
        <button
          className="btn btn-primary mx-5 my-4"
          onClick={() => navigate("/")}
        >
          Go back to Welcome
        </button>
      </div>
    </>
  );
}

export default Home;
