import React, { useContext, useState } from "react";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      newUser
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <Link to="/">
          <img className="w-28 mb-8" src={logo} alt="App Logo" />
        </Link>

        <form onSubmit={(e) => submitHandler(e)} className="p-2">
          <h3 className="text-base font-medium mb-1">User Email Id</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 border w-full text-sm placeholder:text-sm"
          />
          <h3 className="text-base font-medium mb-1">Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Example_Password123"
            className="bg-[#eeeeee] mb-6 rounded-md px-4 py-3 border w-full text-sm placeholder:text-sm"
          />

          <button className="bg-black text-white mb-2 rounded-md px-4 py-[0.7rem] w-full text-base">
            Login
          </button>

          <p className="text-sm text-center">
            New Here?
            <Link to="/signup" className="text-blue-500 font-semibold">
              {" "}
              Create a Account
            </Link>
          </p>
        </form>
      </div>
      <div className="px-2">
        <Link
          to="/cap-login"
          className="bg-[#FC3C06] flex items-center justify-center text-white mb-3 rounded-md px-4 py-[0.7rem] w-full text-sm"
        >
          Captain Sign In
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
