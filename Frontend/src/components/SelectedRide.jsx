import React from "react";

const SelectedRide = ({ setSelectedRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => setSelectedRidePanel(false)}
        className="absolute top-[1.6rem] right-6 text-zinc-500 text-2xl"
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-xl font-semibold mb-5">Confirm Your Ride</h3>

      <div className="flex items-center justify-between flex-col mb-5">
        <img
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />

        <div className="w-full mt-5">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <button className="w-full p-3 bg-emerald-600 text-white font-semibold rounded-lg">Confirm</button>
      </div>
    </div>
  );
};

export default SelectedRide;
