import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageProduct() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true); // Because sometimes Heroku sleeps
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_BACKEND}/product/all_products`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data);
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
        <h1 className="text-3xl font-bold text-headingColor text-center">Products</h1>
        <div className="flex flex-col my-8 border rounded">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Product Title
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Price
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr
                        className={
                          index % 2
                            ? "bg-white border-b transition duration-300 ease-in-out hover:bg-sky-200 cursor-pointer"
                            : "bg-gray-100 border-b transition duration-300 ease-in-out hover:bg-sky-200 cursor-pointer"
                        }
                        key={index}
                        onClick={() => {
                          navigate(`/pharmacy/products/product/${product._id}`);
                        }}
                      >
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.description}
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
              navigate(`/products/addProduct`);
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    );
  }
}
