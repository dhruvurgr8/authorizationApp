import axios from "axios";
import { useEffect, useState } from "react";

const UserDetails = ({ token, setToken }) => {
  const [serverData, setServerData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/users",
        method: "GET",
        headers: {
          Authorization: `Bearer: ${token}`, // Removed colon here
        },
      });

      setServerData(response.data.result);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setServerData([]); // Reset data to an empty array in case of error
    }
  }

  useEffect(() => {
    fetchData();
  }, [token]);

  function clearToken() {
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <>
      <div className="btn-wrapper">
        <button className="btn btn-warning" onClick={clearToken}>
          Clear Token
        </button>
      </div>
      <h1>Token and user details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(serverData) &&
            serverData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UserDetails;
