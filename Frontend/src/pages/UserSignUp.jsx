import React, { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState({ firstname: "", lastname: "" });
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
    });
    setEmail("");
    setFullname({ firstname: "", lastname: "" });
    setPassword("");
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <Link to="/">
          <img className="w-28 mb-8" src={logo} alt="App Logo" />
        </Link>

        <form onSubmit={(e) => submitHandler(e)} className="p-2">
          <h3 className="text-sm mb-1">What's your name</h3>
          <div className="flex gap-2">
            <input
              type="name"
              required
              value={fullname.firstname}
              onChange={(e) => setFullname({ ...fullname, firstname: e.target.value })}
              placeholder="First Name"
              className="bg-[#eeeeee] mb-4 rounded-md px-4 py-2 w-1/2 border text-base placeholder:text-sm"
            />
            <input
              type="email"
              required
              value={fullname.lastname}
              onChange={(e) => setFullname({ ...fullname, lastname: e.target.value })}
              placeholder="Last Name"
              className="bg-[#eeeeee] mb-4 rounded-md px-4 py-2 w-1/2 border text-base placeholder:text-sm"
            />
          </div>
          <h3 className="text-sm mb-1">What's your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="bg-[#eeeeee] mb-4 rounded-md px-4 py-2 border w-full text-base placeholder:text-sm"
          />
          <h3 className="text-sm mb-1">Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Example_Password123"
            className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-base placeholder:text-sm"
          />

          <button className="bg-black text-white mb-2 rounded-md px-4 py-[0.7rem] w-full text-sm">
            Register
          </button>

          <p className="text-sm text-center">
            Done Already?
            <Link className="text-blue-500 font-semibold"> Sign In</Link>
          </p>
        </form>
      </div>
      <div className="px-2">
        <Link
          to="/cap-login"
          className="bg-[#F75D43] flex items-center justify-center text-white mb-3 rounded-md px-4 py-[0.7rem] w-full text-sm"
        >
          Captain Sign In
        </Link>
      </div>
    </div>
  );
};

export default UserSignUp;
