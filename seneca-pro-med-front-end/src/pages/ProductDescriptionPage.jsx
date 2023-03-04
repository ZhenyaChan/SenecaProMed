import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDescriptionPage = () => {
  const [product, setProduct] = useState({
    _id: 0,
    title: "",
    description: "",
    price: 0,
    photo: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/product/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-prose">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Product Title: {product.title}
        </h5>
        <div>
          <img src={product.photo} alt="property" />
          <br />
          <ul className="bg-white rounded-lg text-gray-900">
            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price:
              &nbsp;&nbsp;{product.price}
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              Description: &nbsp;&nbsp;{product.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
