import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function VaultLogin() {
  const [vaultLogin, setVaultLogin] = useState();
  const [vault, setVault] = useState({
    vaultName: "",
    password: "",
  });
  useEffect(() => {
    loadVaultLogin();
  }, []);
  const loadVaultLogin = async () => {
    const result = await axios.get("http://localhost:8080/vaults");
    console.log(result);
    setVaultLogin(result.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const vaultFound = vaultLogin.find((v) => v.vaultName === vault.vaultName);
    if (vaultLogin.password === vaultFound.password) {
      alert("Thank you! You are logged in successfully!");
    } else {
      alert("Incorrect password. Please try again.");
      setVault({ vaultName: "", password: "" });
    }
  };
  const handleChange = (e) => {
    setVault({ ...vault, [e.target.id]: e.target.value });
  };
  return (
    <>
      <div className="container text-center" style={{ marginTop: "5rem" }}>
        <h1>Enter into the vault, User</h1>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default VaultLogin;
