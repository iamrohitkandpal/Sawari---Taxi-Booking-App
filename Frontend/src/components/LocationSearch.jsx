import React from "react";

const LocationSearch = ({ setVehiclePanelOpen, setPanelOpen }) => {
  // Sample Data Array
  const locations = [
    "J-401, Anand Vihar Flats, Tragad Road, Chandkheda, Ahemdabad",
    "22B, Near Malhotra's Cafe, Sheryians Coding School, Bhopal",
    "Satyamev Hospital, Near Highway Road, Chandkheda, Ahemdabad",
    "Hare Krishna Mandir, Bhadaj Gam, S.P. Ring Road, Ahemdabad",
  ];

  return (
    <div>
      {/* Sample Data */}
      {locations.map((location, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setVehiclePanelOpen(true);
              setPanelOpen(false);
            }}
            className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all cursor-pointer items-center my-2"
          >
            <div className="bg-zinc-200 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
              <i className="ri-map-pin-line text-lg"></i>
            </div>
            <div className="flex flex-col">
              <h4 className="font-medium text-gray-800 text-sm">{location}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearch;
