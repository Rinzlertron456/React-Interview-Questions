import React from "react";

function VaultCredentials() {
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
    if (vaultFound && vaultFound.password === vault.password) {
      alert("Thank you. You are now signed in.");
    } else {
      alert("Invalid credentials. Please try again.");
    }
    setVault({ vaultName: "", password: "" });
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

export default VaultCredentials;
