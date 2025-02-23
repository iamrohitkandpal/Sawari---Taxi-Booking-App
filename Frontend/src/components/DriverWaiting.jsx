import React from "react";

const DriverWaiting = ({setDriverWaiting, setVehicleFound}) => {
return (
    <div className="pt-5 bg-white">
        <h5
            onClick={() => {
                setDriverWaiting(false);
                setVehicleFound(true);
            }}
            className="absolute top-2 left-1/2 transform -translate-x-1/2 text-zinc-500 text-2xl cursor-pointer hover:text-zinc-700 transition-colors"
        >
            <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
        </h5>

        <div className="flex gap-5 items-center justify-between">
            <img
                src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                alt="" className="h-12"
            />
            <div className="text-right">
                    <h2 className="text-lg font-medium">Rohit</h2>
                    <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ07 JK 1234</h4> 
                    <p className="text-sm text-gray-600">Maruti Suzuki Alto 800</p>
            </div>
        </div>

        <div className="flex gap-5 items-center justify-between flex-col">
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
        </div>
    </div>
);
};

export default DriverWaiting;
