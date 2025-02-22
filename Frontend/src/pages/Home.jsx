import React, { useRef, useState } from "react";
import { logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import VehiclePanel from "./../components/VehiclePanel";
import LocationSearch from "./../components/LocationSearch";
import SelectedRide from "../components/SelectedRide";
import DriverSearch from "../components/DriverSearch";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const selectedRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [selectedRidePanel, setSelectedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);

  useGSAP(
    function () {
      gsap.to(panelRef.current, {
        display: panelOpen ? "block" : "none",
        height: panelOpen ? "73%" : 0,
      });
      gsap.to(closeRef.current, {
        opacity: panelOpen ? 1 : 0,
      });
    },
    [panelOpen, closeRef]
  );

  useGSAP(
    function () {
      gsap.to(vehiclePanelRef.current, {
        transform: vehiclePanelOpen ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehiclePanelOpen, vehiclePanelRef]
  );

  useGSAP(
    function () {
      gsap.to(selectedRideRef.current, {
        transform: selectedRidePanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [selectedRidePanel, selectedRideRef]
  );

  useGSAP(
    function () {
      gsap.to(vehicleFoundRef.current, {
        transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehicleFound, vehicleFoundRef]
  );

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
        <div className="bg-white h-[27%] p-5 relative">
          <h5
            ref={closeRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-4 right-6 text-2xl text-zinc-500"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-xl font-semibold mb-[0.85rem] ">Find a trip</h4>
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
        <div ref={panelRef} className="bg-white h-0 hidden px-5">
          <LocationSearch
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bg-white bottom-0 px-3 py-6 translate-y-full">
        <VehiclePanel setPanelOpen={setPanelOpen} setSelectedRidePanel={setSelectedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>

      <div ref={selectedRideRef} className="fixed w-full z-10 bg-white bottom-0 px-3 py-6 translate-y-full">
        <SelectedRide setSelectedRidePanel={setSelectedRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bg-white bottom-0 px-3 py-6 translate-y-full">
        <DriverSearch  />
      </div>
    </div>
  );
};

export default Home;
