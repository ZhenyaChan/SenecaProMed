import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPharmacy() {
    
   const [user, setUser] = useState()
   const navigate = useNavigate();
    
   useEffect(() => {
      setUser({
         pharmacyName: "",
         password: "",
         password1: "",
         email: "",
         phoneNumber: "",
         street: "",
         city: "",
         postalCode: "",
         province: "",
         country: ""
      })
   }, [])

   function handleChange(e) {
      const target = e.target
      let value = target.value
      const name = target.name
      
      setUser((currentUser) => {
         return { ...currentUser, [name]: value }
      })
   }
   
   function handleSubmit(e) {
      e.preventDefault()

      fetch(`${process.env.REACT_APP_BACKEND}/admin/pharmacy/signup`,
         {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
            "content-type": "application/json"
            }
         }
      ).then(() => {
        navigate(`../admin/pharmacies/all_pharmacies`);
      })
   }
    
   return (
      <>
         <br />
         <br />
         <br />

         <div className="flex justify-center">
            <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
               <h2 className="text-lg font-medium text-gray-900 px-2 py-2 text-center">
                  Create Pharmacy User
               </h2>
               <br />
               <form className="w-96" onSubmit={handleSubmit}>
                  
                  <div className="form-group mb-6">
                     <input
                        type="text"
                        placeholder="Pharmacy name"
                        name="pharmacyName"
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
                        placeholder="Password"
                        name="password"
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
                        placeholder="Confirm password"
                        name="password1"
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
                        placeholder="Email address"
                        name="email"
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
                        placeholder="Street"
                        name="street"
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
                        placeholder="Phone number"
                        name="phoneNumber"
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
                            navigate(`../admin/pharmacies/all_pharmacies`);
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
                        Sign up
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
