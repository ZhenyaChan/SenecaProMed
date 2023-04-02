import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRoleCheck from "../../useRoleCheck.js";

export default function PharmacyListClient() {
  useRoleCheck(["client", "pharmacy"]);

  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_BACKEND}/admin/client/${id}`)
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
                Client: {user.firstName + " " + user.lastName}
              </h5>
              <br />
              <ul className="bg-white rounded-lg text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Username: &nbsp;&nbsp;{user.userName}
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  Phone Number: &nbsp;&nbsp;{user.phoneNumber}
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Email: &nbsp;&nbsp;{user.email}
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  &nbsp;&nbsp;&nbsp;&nbsp; Postal Code: &nbsp;&nbsp;{user.postalCode}
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  City: &nbsp;&nbsp;{user.city}
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Province: &nbsp;&nbsp;
                  {user.province}
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Country: &nbsp;&nbsp;
                  {user.country}
                </li>
              </ul>
              <br/>
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
                    if(user.role==='client'){
                        navigate(`../`)
                    }else{
                      navigate(`../admin/clients/all_clients`);
                    }
                    
                  }}
                >
                  Return
                </button>
                &nbsp;&nbsp;&nbsp;
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
