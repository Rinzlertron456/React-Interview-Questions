import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function VaultRegistration() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [vault, setVault] = useState({
    vaultName: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setVault({ ...vault, [e.target.id]: e.target.value });
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation and save the vault to the database
    // Reset the form state
    if (vault.password === confirmPassword) {
      console.log(vault);
      console.log("Confirm Password: " + confirmPassword);
      await axios.post("http://localhost:8080/vault", vault);
      alert("Vault created successfully!");
      setVault({ vaultName: "", password: "", confirmPassword: "" });
      navigate("/home");
    } else {
      console.log("Confirm Password: " + confirmPassword);
      alert("Passwords do not match!");
      setVault({ vaultName: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <>
      <div className="container text-center" style={{ marginTop: "5rem" }}>
        <h1>Create a New Vault for yourself, Please</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-2">
            <label htmlFor="username">Vault Name:</label>
            <input
              type="text"
              className="form-control"
              id="vaultName"
              value={vault.vaultName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={vault.password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={(e) => handleConfirmPasswordChange(e)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default VaultRegistration;
