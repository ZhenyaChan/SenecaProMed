import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminOrders() {
   const [users, setUsers] = useState();
   const [loading, setLoading] = useState(true); // Because sometimes Heroku sleeps

   const { clientId } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);
      console.log("Here0")

      // Fetch order list
      fetch(`${process.env.REACT_APP_BACKEND}/admin/orders/client/${clientId}`)
         .then((res) => res.json())
         .then((result) => {
            setUsers(result.data);
            setLoading(false);
            console.log("Here1")
         });
   }, [clientId]);

   if (loading) {
      console.log("Here2")
      return (
         <>
            {/* Could return null, or something nicer than <p></p> */}
            <p>Loading..</p>
         </>
      );
   } else {
      console.log("Here3")
      return (
         <>
            <br />
            <br />
            <br />
            <h2 className="text-lg font-medium text-gray-900 px-2 py-2 text-left">
               Orders
            </h2>
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
                                    Order ID
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Status
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Number of Products
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Amount Paid
                                 </th>
                                 <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                 >
                                    Order Sent
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
                                    onClick={() => {
                                       // Change to order id
                                       navigate(`../client/order_detail/${user._id}`);
                                    }}
                                 >
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {index + 1}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user._id}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user.order_status}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user.products.length}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       ${user.products.reduce((totalPrice, product) => totalPrice += (product.quantity * product.price), 0).toFixed(2)}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {user.datePlaced}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
            <br />
            <br />
            <br />
         </>
      );
   }
}
