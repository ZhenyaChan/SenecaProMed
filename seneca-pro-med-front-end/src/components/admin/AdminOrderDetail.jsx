import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderDetail() {
   const { id } = useParams();

   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/admin/driver/${id}`) // Search by order ID later
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
                        Order: {"Order ID"} {/* Need to change */}
                     </h5>
                     <br />
                     <ul className="bg-white rounded-lg text-gray-900">
                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Picture: &nbsp;&nbsp;{'Picture Link'}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            Product: &nbsp;&nbsp;{'Phone Number'}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Client ID: &nbsp;&nbsp;{'Client ID'}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Quantity: &nbsp;&nbsp;{'Quantity'}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Total Price: &nbsp;&nbsp;{'$Price'}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Postal Code: &nbsp;&nbsp;{'Postal Code'}
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
                              navigate(`../admin/orders`);
                           }}
                        >
                           Back
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
