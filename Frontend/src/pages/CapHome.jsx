import React from 'react'
import { Link } from 'react-router-dom';

const CapHome = () => {
  return (
    <div className="h-screen">
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex gap-5 items-center justify-between">
          <img
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
            className="h-12"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">Rohit</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ07 JK 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto 800</p>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between flex-col">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-4 border-b-2 hover:bg-gray-100 transition duration-200">
              <i className="ri-map-pin-2-fill text-xl"></i>
              <div>
                <h3 className="text-lg font-semibold">562/11-A</h3>
                <p className="text-sm text-gray-600">Example Destination</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-4 hover:bg-gray-100 transition duration-200">
              <i className="ri-currency-line text-xl"></i>
              <div>
                <h3 className="text-lg font-semibold">₹183.20</h3>
                <p className="text-sm text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  )
}

export default CapHome