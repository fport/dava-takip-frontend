import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { Main, Navbar } from "../components";

const PrivateScreen = () => {
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default PrivateScreen;
