import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DriverOrderDetail() {
   const { id } = useParams();

   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/admin/order/${id}`) // Search by order ID later
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
                     <ul className={"bg-white rounded-lg text-gray-900"}>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Client ID: {user.clientId}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           Product(s): {user.products.length}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Total Price: ${user.products.reduce((totalPrice, product) => totalPrice += (product.quantity * product.price), 0).toFixed(2)}
                        </li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">
                           &nbsp;&nbsp;&nbsp;
                           Postal Code: {'Postal Code'}
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
                              navigate(`../driver/orders`);
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
                              fetch(`${process.env.REACT_APP_BACKEND}/admin/order/${id}`, {
                                 method: "PUT",
         
                                 headers: {
                                    "content-type": "application/json"
                                 },
                                 body: JSON.stringify({ 'order_status': 'Order Delivered' })
                              }).then(() => {
                                 navigate(`../driver/orders`);
                           });
                           }}
                        >
                           FINISH
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
                              fetch(`${process.env.REACT_APP_BACKEND}/admin/order/${id}`, {
                                 method: "PUT",
         
                                 headers: {
                                    "content-type": "application/json"
                                 },
                                 body: JSON.stringify({ 'order_status': 'Delivery in Progress' })
                              }).then(() => {
                                 navigate(`../driver/orders`);
                           });
                           }}
                        >
                           ACCEPT
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
