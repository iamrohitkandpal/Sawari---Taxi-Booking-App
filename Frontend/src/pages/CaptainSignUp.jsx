import React, { useState } from "react";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState({ firstname: "", lastname: "" });
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    console.log(captainData);
    

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFullname({ firstname: "", lastname: "" });
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-4 flex flex-col justify-between h-screen">
      <div>
        <Link to="/">
          <img className="w-28 mb-8" src={logo} alt="App Logo" />
        </Link>

        <form onSubmit={submitHandler} className="p-2">
          <h3 className="text-base font-medium mb-1">Captain&apos;s Name</h3>
          <div className="flex gap-2">
            <input
              type="text"
              required
              value={fullname.firstname}
              onChange={(e) => setFullname({ ...fullname, firstname: e.target.value })}
              placeholder="First Name"
              className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
            <input
              type="text"
              required
              value={fullname.lastname}
              onChange={(e) => setFullname({ ...fullname, lastname: e.target.value })}
              placeholder="Last Name"
              className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
          </div>

          <h3 className="text-base font-medium mb-1">Captain&apos;s Email Id</h3>
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
            className="bg-[#eeeeee] mb-4 rounded-md px-4 py-3 border w-full text-sm placeholder:text-sm"
          />

          <h3 className="text-base font-medium mb-1">Vehicle Details</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
            <input
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
          </div>

          <div className="flex gap-2 mb-6">
            <input
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Seating Capacity"
              className="bg-[#eeeeee] rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded-md px-4 py-3 w-1/2 border text-sm placeholder:text-sm"
            >
              <option value="" disabled>Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Auto">Auto</option>
              <option value="Bike">Bike</option>
            </select>
          </div>

          <button className="bg-black text-white mb-2 rounded-md px-4 py-[0.7rem] w-full text-sm">
            Create Account
          </button>

          <p className="text-sm text-center">
            Done Already?
            <Link to="/cap-login" className="text-blue-500 font-semibold">
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

export default CaptainSignUp;
