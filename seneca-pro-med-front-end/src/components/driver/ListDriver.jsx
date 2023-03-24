import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRoleCheck from "../../useRoleCheck.js";


export default function ListDriver() {
   useRoleCheck(["admin"]);
   
   const { id } = useParams();

   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/admin/driver/${id}`)
         .then((res) => res.json())
         .then((result) => {
            setUser(result.data);
            setLoading(false);
         });
   }, [id]);

   if (loading) {
      return (
         <>
            <p>Loading...</p>
         </>
      );
   } else {
      if (user) {
         return (
            <>
               <br />
               <br />
               <br />
               <div className="flex justify-center">
                  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-prose">
                     <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                        Driver: {user.firstName + " " + user.lastName}
                     </h5>
                     <br />
                     <ul className="bg-white rounded-lg text-gray-900">
                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Username: &nbsp;&nbsp;{user.userName}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           Phone Number: &nbsp;&nbsp;{user.phoneNumber}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Email: &nbsp;&nbsp;{user.email}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;
                           Vehicle Model: &nbsp;&nbsp;{user.vehicleModel}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;
                           License Place: &nbsp;&nbsp;{user.licensePlate}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           City: &nbsp;&nbsp;{user.city}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Postal Code:
                           &nbsp;&nbsp;{user.postalCode}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Province: &nbsp;&nbsp;{user.province}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Country: &nbsp;&nbsp;{user.country}
                        </li>
                     </ul>
                     <br />

                     <div className="flex justify-center">
                        <button
                           type="button"
                           className=" inline-block 
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
                           Back
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button
                           type="button"
                           className=" inline-block 
                           px-6 py-2.5 
                           bg-green-500 
                           text-white 
                           font-medium 
                           text-xs 
                           leading-tight 
                           uppercase 
                           rounded 
                           shadow-md 
                           hover:bg-green-700 hover:shadow-lg 
                           focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 
                           active:bg-green-800 active:shadow-lg 
                           transition duration-150 ease-in-out"
                           onClick={() => {
                              navigate(`../admin/driver/update_driver/${user._id}`);
                           }}
                        >
                           Edit
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button
                           type="button"
                           className=" inline-block 
                           px-6 
                           py-2.5 
                           bg-red-600 
                           text-white 
                           font-medium 
                           text-xs 
                           leading-tight 
                           uppercase 
                           rounded 
                           shadow-md 
                           hover:bg-red-700 hover:shadow-lg 
                           focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 
                           active:bg-red-800 active:shadow-lg 
                           transition duration-150 ease-in-out"
                           onClick={() => {
                            fetch(`${process.env.REACT_APP_BACKEND}/driver/${id}`, {
                                method: "DELETE"
                             }).then(() => {
                                navigate(`../admin/drivers/all_drivers`);
                             });
                           }}
                        >
                           Delete
                        </button>
                     </div>
                  </div>
               </div>
               <br />
               <br />
               <br />
            </>
         );
      } else {
         return (
            <>
               <p>Unable to find User: {id}</p>
            </>
         );
      }
   }
}
