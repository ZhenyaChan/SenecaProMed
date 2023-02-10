import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function PharmacyUsers() {
   const [users, setUsers] = useState();
   const [loading, setLoading] = useState(true); // Because sometimes Heroku sleeps

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`https://promed-api.herokuapp.com/pharmacy/All_Pharmacies`)
         .then((res) => res.json())
         .then((result) => {
            setUsers(result.data);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return (
         <>
            {/* Could return null, or something nicer than <p></p> */}
            <p>Loading..</p>{" "}
         </>
      );
   } else {
      return (
         <>
            <br />
            <br />
            <br />
            <h2 className="text-lg font-medium text-gray-900 px-2 py-2 text-left">Pharmacy Users</h2>
            <div className="flex flex-col">
               <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                     <div className="overflow-hidden">
                        <table className="min-w-full">
                           <thead className="bg-white border-b">
                              <tr>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    #
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Pharmacy
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Email
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Phone #
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {users.map((user, index) => (
                                 <tr
                                    className={
                                       index % 2
                                          ? "bg-white border-b transition duration-300 ease-in-out hover:bg-sky-200 cursor-pointer"
                                          : "bg-gray-100 border-b transition duration-300 ease-in-out hover:bg-sky-200 cursor-pointer"
                                    }
                                    key={index}
                                    onClick={() => {navigate(`/pharmacy/${user._id}`)}}
                                 >
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {index + 1}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user.pharmacyName}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user.email}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user.phoneNumber}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex justify-end">
            <button
                           type="button"
                           className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                           onClick={() => {
                              navigate(`/pharmacyUsers`);
                           }}
                        >
                           Add User
                        </button>

            </div>
            <br />
            <br />
            <br />
         </>
      );
   }
}

export default PharmacyUsers;
