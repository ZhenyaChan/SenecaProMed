import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminOrderDetail() {
   const { id } = useParams();

   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/admin/order/${id}`)
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
                        Order: {user._id} {/* Need to change */}
                     </h5>
                     <br />
                     <ul className="bg-white rounded-lg text-gray-900">
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Client ID: &nbsp;&nbsp;{user.clientId}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;
                           Pharmacy ID: &nbsp;&nbsp;{user.pharmacyId}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Driver ID: &nbsp;&nbsp;{user.driverId}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Product(s): &nbsp;&nbsp;{user.products.length}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;
                           Total Amount: &nbsp;${user.products.reduce((totalPrice, product) => totalPrice += (product.quantity * product.price), 0).toFixed(2)}
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
                              navigate(`../`);
                           }}
                        >
                           Home
                        </button>
                        &nbsp;&nbsp;&nbsp;

                        <button
                           type="button"
                           className=" inline-block 
                           px-6 py-2.5 
                           bg-green-600 
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
                              navigate(`../admin/order_products/${id}`);
                           }}
                        >
                           Products
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
