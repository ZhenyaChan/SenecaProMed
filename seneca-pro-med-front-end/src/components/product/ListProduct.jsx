import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRoleCheck from "../../useRoleCheck.js";

export default function ListProduct() {
  useRoleCheck(["pharmacy"]);

  const { id } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_BACKEND}/product/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.data);
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
    if (product) {
      return (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-headingColor text-center">{product.title}</h1>
          <div className="block p-6 my-8 border rounded-lg shadow-lg bg-white max-w-prose">
            <br />
            <ul className="bg-white rounded-lg text-gray-900">
              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                <span className="font-bold">Product Title:</span> {product.title}
              </li>
              <li className="px-6 py-2 border-b border-gray-200 w-full">
                <span className="font-bold">Price:</span> ${product.price}
              </li>
              <li className="px-6 py-2 border-b border-gray-200 w-full">
                <span className="font-bold">Description:</span> {product.description}
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
                  navigate(`/pharmacy/products/all_products`);
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
                  navigate(`/pharmacy/product/update_product/${product._id}`);
                }}
              >
                Update
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
                  fetch(`${process.env.REACT_APP_BACKEND}/product/${product._id}`, {
                    method: "DELETE",
                  }).then(() => {
                    navigate(`/pharmacy/products/all_products`);
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p>Unable to find Product: {id}</p>
        </>
      );
    }
  }
}
