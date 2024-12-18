import React, { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <Link to="/">
          <img className="w-28 mb-8" src={logo} alt="App Logo" />
        </Link>

        <form onSubmit={(e) => submitHandler(e)} className="p-2">
          <h3 className="text-sm mb-1">Email Id</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="bg-[#eeeeee] mb-4 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
          />
          <h3 className="text-base mb-1">Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Example_Password123"
            className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-base placeholder:text-base"
          />

          <button className="bg-black text-white mb-2 rounded-md px-4 py-[0.7rem] w-full text-sm">
            Login
          </button>

          <p className="text-sm text-center">
            New Here?
            <Link className="text-blue-500 tesem"> Register Now</Link>
          </p>
        </form>
      </div>
      <div className="px-2">
        <button className="bg-[#F75D43] text-white mb-3 rounded-md px-4 py-[0.7rem] w-full text-sm">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
