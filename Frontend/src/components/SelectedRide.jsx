import React from "react";

const SelectedRide = ({ setSelectedRidePanel, setVehicleFound }) => {
  return (
    <div className="bg-white">
      <h5
        onClick={() => setSelectedRidePanel(false)}
        className="absolute top-5 right-6 text-zinc-500 text-2xl cursor-pointer hover:text-zinc-700 transition-colors"
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-xl font-semibold mb-6">Confirm Your Ride</h3>

      <div className="flex gap-5 items-center justify-between flex-col">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />

        <div className="w-full">
          <div className="flex items-center gap-5 p-4 border-b-2 hover:bg-gray-100 transition duration-200">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p className="text-sm text-gray-600">Example Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 border-b-2 hover:bg-gray-100 transition duration-200">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p className="text-sm text-gray-600">Example Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 hover:bg-gray-100 transition duration-200">
            <i className="ri-currency-line text-2xl"></i>
            <div>
              <h3 className="text-lg font-semibold">₹183.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <button onClick={() => {
            setSelectedRidePanel(false);
            setVehicleFound(true);
        }} className="w-full p-3 bg-emerald-600 text-white font-semibold rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SelectedRide;
