import React from "react";
import { useNavigate } from "react-router-dom";

function VaultRegistration() {
  const [vault, setVault] = useState({
    vaultName: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation and save the vault to the database
    // Reset the form state
    if (vault.password === vault.confirmPassword) {
      alert("Vault created successfully!");
      await axios.post("http://localhost:8080/vault", vault);
      setVault({ vaultName: "", password: "", confirmPassword: "" });
      navigate("/home");
    } else {
      alert("Passwords do not match!");
      setVault({ vaultName: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <>
      <div className="container text-center" style={{ marginTop: "5rem" }}>
        <h1>Create a New Vault for yourself, Please</h1>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="username">Vault Name:</label>
            <input
              type="text"
              className="form-control"
              id="vaultName"
              value={vault.vaultName}
              onChange={(e) =>
                setVault({ ...vault, vaultName: e.target.value })
              }
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
              onChange={(e) => setVault({ ...vault, password: e.target.value })}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={vault.confirmPassword}
              onChange={(e) =>
                setVault({ ...vault, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={(e) => handleSubmit(e)}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default VaultRegistration;
