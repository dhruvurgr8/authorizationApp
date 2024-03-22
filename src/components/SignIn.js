import axios from "axios";
import { useState } from "react";

const SignIn = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://node-auth-jwt-w78c.onrender.com/login",
        { email, password }
      );

      const item = localStorage.setItem("token", response.data.token);
      console.log(item);
      setToken(response.data.token);
    } catch (err) {
      setError(err.response.data.message || "An error occurred during login.");
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default SignIn;
