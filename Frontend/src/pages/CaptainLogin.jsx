import React, { useState } from "react";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain} = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = ({
      email: email,
      password: password,
    });

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if (response.status === 200) {
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate('/cap-home');
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
          <h3 className="text-base font-medium mb-1">Cap Email Id</h3>
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

          <button className="bg-black text-white mb-2 rounded-md px-4 py-[0.7rem] w-full text-sm">
            Login
          </button>

          <p className="text-sm text-center">
            Join a fleet?
            <Link to='/cap-signup' className="text-blue-500 font-semibold"> Register as a Captain</Link>
          </p>
        </form>
      </div>
      <div className="px-2">
        <Link to='/login' className="bg-[#4E4F4E] flex items-center justify-center text-white mb-3 rounded-md px-4 py-[0.7rem] w-full text-sm">
          User Sign In
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
