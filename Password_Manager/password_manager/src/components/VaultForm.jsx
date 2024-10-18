import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Vaultform() {
  const [vaults, setVaults] = useState([]);
  const [vault, setVault] = useState({
    vaultName: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setVault({ ...vault, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (vault.password === vault.confirmPassword) {
      setVaults([...vaults, vault]);
      alert(
        "Thanks for choosing to create your password vault with us, " +
          vault.vaultName +
          "!!"
      );
      navigate("/home");
      setVault({ vaultName: "", password: "", confirmPassword: "" });
    } else {
      alert("Passwords must match");
      setVault({ vaultName: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <>
      <div className="container text-center">
        <h1 style={{ marginTop: "5rem" }}>Create New Vault</h1>
        <form className="mt-5" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="vaultName" className="form-label">
              <h3>Vault Name</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="vaultName"
              value={vault.vaultName}
              placeholder="Enter vault name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h3>Password</h3>
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="password"
              value={vault.password}
              placeholder="Enter password"
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="confirmPassword" className="form-label">
              <h3>Confirm Password</h3>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Vault
          </button>
        </form>
      </div>
    </>
  );
}

export default Vaultform;
