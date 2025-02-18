import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/cap-login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/cap-login");
      });
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default CaptainProtectWrapper;
