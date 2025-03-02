import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import { logo } from "../assets/index";
import RidePopUp from "./../components/RidePopup";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ConfirmRidePopUp from './../components/ConfirmRidePopUp';

const CapHome = () => {
  const [ride, setRide] = useState(null);
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(ridePopupPanelRef.current, {
      duration: 0.75, // Add smooth animation
      transform: ridePopupPanel ? "translateY(0)" : "translateY(100%)",
      ease: "power2.out"
    });
  }, [ridePopupPanel]);

  useGSAP(() => {
    gsap.to(confirmRidePopupPanelRef.current, {
      duration: 0.75, // Add smooth animation
      transform: confirmRidePopupPanel ? "translateY(0)" : "translateY(100%)",
      ease: "power2.out"
    });
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-28 mb-8" src={logo} alt="App Logo" />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5"> 
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopUp ride={ride} setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} // confirmRide={confirmRide}
        />
      </div>
      <div ref={confirmRidePopupPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
    </div>
  );
};

export default CapHome;
