import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRoleCheck from "../../useRoleCheck.js";


export default function UpdatePharmacy() {
   useRoleCheck(["admin"]);
   
   const navigate = useNavigate();
   const { id } = useParams();
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState();
   const [errorPharmacyName, setErrorPharmacyName] = useState();
   const [errorEmail, setErrorEmail] = useState();
   const [errorPhoneNumber, setErrorPhoneNumber] = useState();
   const [errorStreet, setErrorStreet] = useState();
   const [errorCity, setErrorCity] = useState();
   const [errorPostalCode, setErrorPostalCode] = useState();
   const [errorProvince, setErrorProvince] = useState();
   const [errorCountry, setErrorCountry] = useState();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/admin/pharmacy/${id}`)
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

   function validateForm() {
      let isValidated = true;

      if (user.pharmacyName === "") {
         setErrorPharmacyName("Please enter a pharmacy name");
         isValidated = false;
      } else {
         setErrorPharmacyName("");
      }

      let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (user.email === "") {
         setErrorEmail("Please enter an email address");
         isValidated = false;
      } else if (!validEmail.test(user.email)) {
         setErrorEmail("Please enter a valid email address");
         isValidated = false;
      } else {
         setErrorEmail("");
      }

      let validPhoneNumber = /^(?:\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}$/
      if (user.phoneNumber === "") {
         setErrorPhoneNumber("Please enter a phone number");
         isValidated = false;
      } else if (!validPhoneNumber.test(user.phoneNumber)) {
         setErrorPhoneNumber("Please enter a valid phone number");
         isValidated = false;
      } else {
         setErrorPhoneNumber("");
      }

      if (user.street === "") {
         setErrorStreet("Please enter a street");
         isValidated = false;
      } else {
         setErrorStreet("");
      }

      if (user.city === "") {
         setErrorCity("Please enter a city");
         isValidated = false;
      } else {
         setErrorCity("");
      }

      let validPostalCode = /^[A-Z]\d[A-Z] \d[A-Z]\d$/
      if (user.postalCode === "") {
         setErrorPostalCode("Please enter a postal code");
         isValidated = false;
      } else if (!validPostalCode.test(user.postalCode)) {
         setErrorPostalCode("Please enter a valid postal code");
         isValidated = false;
      } else {
         setErrorPostalCode("");
      }

      if (user.province === "") {
         setErrorProvince("Please enter a province");
         isValidated = false;
      } else {
         setErrorProvince("");
      }

      if (user.country === "") {
         setErrorCountry("Please enter a country");
         isValidated = false;
      } else {
         setErrorCountry("");
      }
   
      return isValidated
   }

   function handleSubmit(e) {
      e.preventDefault();

      if (validateForm()) {
         fetch(`${process.env.REACT_APP_BACKEND}/admin/pharmacy/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
               "content-type": "application/json"
            }
         }).then(() => {
            navigate(`../admin/pharmacy/${user._id}`);
         });
      }
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
                        Edit: {user.pharmacyName}
                     </h2>
                     <br />
                     <form className="w-96" onSubmit={handleSubmit}>
                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Pharmacy name"
                              name="pharmacyName"
                              value={user.pharmacyName}
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
                        { errorPharmacyName
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorPharmacyName}</span></div>)
                        : null }

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Email address"
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
                        { errorEmail
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorEmail}</span></div>)
                        : null }

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Street"
                              name="street"
                              value={user.street}
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
                        { errorStreet
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorEmail}</span></div>)
                        : null }

                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Phone number"
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
                        { errorPhoneNumber
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorPhoneNumber}</span></div>)
                        : null }

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
                        { errorCity
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorCity}</span></div>)
                        : null }

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
                        { errorPostalCode
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorPostalCode}</span></div>)
                        : null }

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
                        { errorProvince
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorProvince}</span></div>)
                        : null }

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
                        { errorCountry
                        ? (<div className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        <span className="font-medium">{errorCountry}</span></div>)
                        : null }

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
                                 navigate(`../admin/pharmacy/${user._id}`);
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
