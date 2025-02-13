import React, { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState({ firstname: "", lastname: "" });
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
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
      <div className="bg-white p-5 flex flex-col justify-between h-screen">
        <img src={logo} alt="logo" className="w-40 mb-8" />

        <form onSubmit={submitHandler} >
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-700">Email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-gray-700">First Name</h3>
              <input
                type="text"
                required
                value={fullname.firstname}
                onChange={(e) => setFullname({ ...fullname, firstname: e.target.value })}
                placeholder="Enter first name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-gray-700">Last Name</h3>
              <input
                type="text"
                required
                value={fullname.lastname}
                onChange={(e) => setFullname({ ...fullname, lastname: e.target.value })}
                placeholder="Enter last name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-medium text-gray-700">Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Vehicle Information</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                required
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <input
                required
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              >
                <option value="" disabled>Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200"
          >
            Create Captain Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600 hover:text-blue-700 font-medium">
            Login here
          </Link>
        </p>

        <p className="text-xs text-gray-500 mt-8 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <a href="#" className="underline hover:text-gray-700">Google Privacy Policy</a> and{" "}
          <a href="#" className="underline hover:text-gray-700">Terms of Service</a> apply.
        </p>
      </div>
  );
}

export default CaptainSignUp