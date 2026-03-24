import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // 🔐 Temporary hardcoded login (you can connect backend later)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdminLoggedIn", "true");
      onLoginSuccess();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    textAlign: "center",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};

export default Login;