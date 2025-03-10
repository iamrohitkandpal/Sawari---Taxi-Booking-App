import React, { useState } from "react";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "./../context/UserContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState({ firstname: "", lastname: "" });
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      fullname,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setFullname({ firstname: "", lastname: "" });
    setPassword("");
  };

  return (
    <div className="p-4 flex flex-col justify-between h-screen">
      <div>
        <Link to="/">
          <img className="w-28 mb-8" src={logo} alt="App Logo" />
        </Link>

        <form onSubmit={(e) => submitHandler(e)} className="p-2">
          <h3 className="text-base font-medium mb-1">User&apos;s Name</h3>
          <div className="flex gap-2">
            <input
              type="name"
              required
              value={fullname.firstname}
              onChange={(e) =>
                setFullname({ ...fullname, firstname: e.target.value })
              }
              placeholder="First Name"
              className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
            <input
              type="name"
              required
              value={fullname.lastname}
              onChange={(e) =>
                setFullname({ ...fullname, lastname: e.target.value })
              }
              placeholder="Last Name"
              className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
          </div>
          <h3 className="text-base font-medium mb-1">User&apos;s Email Id</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 border w-full text-sm placeholder:text-sm"
          />
          <h3 className="text-base font-medium mb-1">Enter a Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Example_Password123"
            className="bg-[#eeeeee] mb-6 rounded-md px-4 py-3 border w-full text-sm placeholder:text-sm"
          />

          <button className="bg-black text-white mb-2 rounded-md px-4 py-[0.7rem] w-full text-sm">
            Create Account
          </button>

          <p className="text-sm text-center">
            Done Already?
            <Link to="/login" className="text-blue-500 font-semibold">
              {" "}
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="px-2">
        <p className="text-[11px] text-zinc-600 text-center leading-tight">
          This site is protected by reCapcha and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
