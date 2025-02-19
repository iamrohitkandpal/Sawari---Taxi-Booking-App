import React, { useRef, useState } from "react";
import { logo } from "../assets";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearch from './../components/LocationSearch';

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useGSAP(function() {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : 0,
      paddingLeft: panelOpen ? "1.25rem" : 0,
      paddingRight: panelOpen ? "1.25rem" : 0,
    });
    gsap.to(closeRef.current, {
      opacity: panelOpen ? 1 : 0,
    });
  }, [panelOpen, closeRef]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative h-screen">
      <img className="w-24 absolute left-4 top-4" src={logo} alt="" />

      <div className="h-screen w-screen">
        {/* Temporay Image Usage */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-screen flex flex-col justify-end absolute top-0 w-full">
        <div className="bg-white h-[30%] p-5 relative">
          <h5 ref={closeRef} onClick={() => setPanelOpen(false)} className="absolute top-4 right-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-lg font-semibold mb-[0.85rem] ">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col gap-4 relative"
          >
            <div className="line absolute h-16 w-0.5 top-5 left-5 bg-[#828282] before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#383838] before:-left-[3px] before:-top-[2px] before:rounded-sm after:content-[''] after:absolute after:w-2 after:h-2 after:bg-[#383838] after:-left-[3px] after:bottom-0 after:rounded-full"></div>
            <input
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#e6e5e5] placeholder:text-[#828282] px-12 py-[0.7rem] text-sm rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#e6e5e5] placeholder:text-[#828282] px-12 py-[0.7rem] text-sm rounded-lg w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearch />
        </div>
      </div>

      <div className="fixed w-full z-10 bg-white bottom-0 px-3 py-6">
        <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
        <div className="flex border-[3px] mb-2 active:border-black rounded-2xl p-3 items-center justify-between">
              <img className="h-10" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
              <div className="ml-2 w-1/2">
                <h4 className="font-medium text-base">Beamer <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
              </div>
              <h2 className="text-lg font-semibold">₹193.20</h2> 
        </div>
        <div className="flex border-[3px] mb-2 border-black rounded-2xl p-3 items-center justify-between">
              <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
              <div className="w-1/2">
                <h4 className="font-medium text-base">Auto <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
              </div>
              <h2 className="text-xl font-semibold">₹193.20</h2> 
        </div>
        <div className="flex border-[3px] mb-2 border-black rounded-2xl p-3 items-center justify-between">
              <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
              <div className="w-1/2">
                <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
              </div>
              <h2 className="text-xl font-semibold">₹193.20</h2> 
        </div>
      </div>
    </div>
  );
};

export default Home;
