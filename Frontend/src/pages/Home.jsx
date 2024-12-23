import React from "react";
import { home, logo } from "../assets";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        className="h-screen pt-5 w-full justify-between flex flex-col"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <img className="w-28 ml-5" src={logo} alt="App Logo" />
        <div className="bg-white py-2 px-3">
          <h2 className="text-2xl font-bold">Get Started with Sawaari</h2>
          <Link to="/login" className="flex items-center justify-center w-full text-white bg-black py-3 rounded-md my-7">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
