import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VaultPasswordChange() {
  const [vaults, setVaults] = useState([]);
  const navigate = useNavigate();
  const [vault, setVault] = useState({
    vaultName: "",
    password: "",
  });
  useEffect(() => {
    loadVaults();
  }, []);
  const loadVaults = async () => {
    const result = await axios.get("http://localhost:8080/vaults");
    setVaults(result.data);
    console.log(vaults);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const vaultFound = vaults.find((v) => v.vaultName === vault.vaultName);
    if (vaultFound) {
      alert(
        "Hello User" +
          vaultFound.vaultName +
          "\nHere are your vault credentials:\nVault Name: " +
          vaultFound.vaultName +
          " Password: " +
          vaultFound.password
      );
    } else {
      alert("Invalid credentials. Please try again.");
    }
    setVault({ vaultName: "", password: "" });
  };
  const handleChange = (e) => {
    setVault({ ...vault, [e.target.id]: e.target.value });
  };
  return (
    <div className="container text-center" style={{ marginTop: "5rem" }}>
      <h1>Change your password, User</h1>
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
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default VaultPasswordChange;
