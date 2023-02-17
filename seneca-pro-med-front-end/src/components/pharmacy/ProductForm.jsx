import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProductForm = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct({
      title: "",
      description: "",
      price: 0,
      photo: "",
    });
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setProduct((currentProduct) => {
      return { ...currentProduct, [name]: value };
    });
  };

  const resetForm = () => {
    setProduct({
      title: "",
      description: "",
      price: 0,
      photo:
        "https://images.unsplash.com/photo-1670850756988-a1943aa0e554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/product/add_product`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }
    );

    const created = await response.json();
    resetForm();
    if (created) {
      console.log(created);
      navigate("/home");
    }
  };

  if (product) {
    return (
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full over block p-6 m-24 rounded-lg shadow-lg bg-white max-w-md">
          <h2 className="text-lg font-medium text-gray-900 px-2 py-2 text-center">
            Create New Product
          </h2>
          <br />
          <form className="w-96" onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                placeholder="Enter product title here"
                name="title"
                value={product.title}
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Enter price here"
                value={product.price === 0 ? "" : product.price}
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter description here"
                value={product.description}
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className=" w-full px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  navigate(`/home`);
                }}
              >
                {" "}
                Cancel{" "}
              </button>
              <button
                type="submit"
                className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default ProductForm;
