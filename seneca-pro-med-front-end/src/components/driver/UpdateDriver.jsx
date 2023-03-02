import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateDriver() {
   const { id } = useParams();
   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/admin/driver/${id}`)
         .then((res) => res.json())
         .then((response) => {
            if (response.data.hasOwnProperty("_id")) setUser(response.data);
            else setUser(null);
            setLoading(false);
         });
   }, [id]);

   function handleChange(e) {
      const target = e.target;
      let value = target.value;
      const name = target.name;

      setUser((currentUser) => {
         return { ...currentUser, [name]: value };
      });
   }

   function handleSubmit(e) {
      e.preventDefault();

      fetch(`${process.env.REACT_APP_BACKEND}/admin/driver/${id}`, {
         method: "PUT",
         body: JSON.stringify(user),
         headers: {
            "content-type": "application/json"
         }
      }).then(() => {
         navigate(`../admin/driver/${user._id}`);
      });
   }

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
                  <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
                     <h2 className="text-lg font-medium text-gray-900 px-2 py-2 text-center">
                        Edit: {user.firstName + " " + user.lastName}
                     </h2>
                     <br />
                     <form className="w-96" onSubmit={handleSubmit}>
                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="First Name"
                              name="firstName"
                              value={user.firstName}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Last Name"
                              name="lastName"
                              value={user.lastName}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Email Address"
                              name="email"
                              value={user.email}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Phone Number"
                              name="phoneNumber"
                              value={user.phoneNumber}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Postal code"
                              name="postalCode"
                              value={user.postalCode}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Vehicle Model"
                              name="vehicleModel"
                              value={user.vehicleModel}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="License Plate"
                              name="licensePlate"
                              value={user.licensePlate}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="City"
                              name="city"
                              value={user.city}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Province"
                              name="province"
                              value={user.province}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Country"
                              name="country"
                              value={user.country}
                              onChange={handleChange}
                              className="form-control block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <button
                              type="button"
                              className="
                              w-full
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
                              transition
                              duration-150
                              ease-in-out"
                              onClick={() => {
                                 navigate(`../admin/driver/${user._id}`);
                              }}
                           >
                              Back
                           </button>
                           <button
                              type="submit"
                              className="
                              w-full
                              px-6
                              py-2.5
                              bg-blue-600
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-md
                              hover:bg-blue-700 hover:shadow-lg
                              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-blue-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out"
                           >
                              Submit
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
               <br />
               <br />
               <br />
            </>
         );
      }
   }
}
