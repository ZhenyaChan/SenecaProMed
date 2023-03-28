import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PharmacyListLocation() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true); // Because sometimes Heroku sleeps
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_BACKEND}/admin/pharmacies/all_pharmacies`)
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
        <p>Loading..</p>
      </>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold text-headingColor text-center">
          Pharmacy Users
        </h1>
        <div className="flex flex-col my-8 border rounded">
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
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Location
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
                          navigate(`/pharmacy/location/${user._id}`);
                        }}
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
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.street}, {user.city}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}