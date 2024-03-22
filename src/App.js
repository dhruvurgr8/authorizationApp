import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserDetails from "./components/UserDetails";

function App() {
  const [toggle, setToggle] = useState(true);
  const [token, setToken] = useState("");
  console.log(token);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <h1>Authorization App</h1>
      {toggle ? !token && <SignUp /> : !token && <SignIn setToken={setToken} />}
      {!token && (
        <button className="toggle" onClick={handleToggle}>
          ToggleForm
        </button>
      )}
      {token && <UserDetails token={token} setToken={setToken} />}
    </>
  );
}

export default App;
