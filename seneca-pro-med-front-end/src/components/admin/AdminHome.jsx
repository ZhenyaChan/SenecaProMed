import React from 'react';

import { useNavigate } from "react-router-dom";
import { FaUser, FaCar, FaUserFriends, FaClinicMedical } from 'react-icons/fa';
function AdminHome() {

  var size = 250;
  const navigate = useNavigate();
  return (
    <div >   
      <div className="flex flex-row justify-center gap-10">
      <button
        type="button"
        className="inline-block 
        px-6 py-2.5 
        bg-blue-600 
        text-white 
        font-medium text-xs 
        leading-tight 
        uppercase 
        rounded 
        shadow-md 
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
        onClick={() => {
          navigate(`../admin/all/admins`);
        }}
      >
        <FaUser className="mr-1" size={size} />
        Admins
      </button>
    
      <button
        type="button"
        className="inline-block 
        px-6 py-2.5 
        bg-blue-600 
        text-white 
        font-medium text-xs 
        leading-tight 
        uppercase 
        rounded 
        shadow-md 
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
        onClick={() => {
          navigate(`../admin/drivers/all_drivers`);
        }}
      >
        <FaCar className="mr-1" size={size} />
        Driver
      </button>
    
      <button
        type="button"
        className="inline-block 
        px-6 py-2.5 
        bg-blue-600 
        text-white 
        font-medium text-xs 
        leading-tight 
        uppercase 
        rounded 
        shadow-md 
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
        onClick={() => {
          navigate(`../admin/clients/all_clients`);
        }}
      >
        <FaUserFriends className="mr-1" size={size} />
        Client
      </button>
    
      <button
        type="button"
        className="inline-block 
        px-6 py-2.5 
        bg-blue-600 
        text-white 
        font-medium text-xs 
        leading-tight 
        uppercase 
        rounded 
        shadow-md 
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
        onClick={() => {
          navigate(`../admin/pharmacies/all_pharmacies`);
        }}
      >
        <FaClinicMedical className="mr-1" size={size} />
        Pharmacist
      </button>
    </div>
     

    </div>
  );
}

export default AdminHome;