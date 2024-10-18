import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h1>Greetings User</h1>
        <h2>Welcome to SanVin Password Manager</h2>
        <p>
          SanVin Password Manager is a simple password manager app designed to
          help you secure your sensitive data. It offers features like password
          generation, password hashing, and secure storage of passwords.
        </p>
        <h3>What brings you here?</h3>
      </div>
    </>
  );
}

export default App;
