import React, { useState, useEffect } from "react";
import Product from "./Product";


const ProductList = () => {
  const [products, setProducts] = useState([
    {
      _id: 0,
      title: "",
      description: "",
      price: 0,
      photo: "",
    }
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/product/all_products`)
    .then(response => response.json())
    .then(json => {
      console.log(json.data);
      setProducts(json.data);
    })
    .catch(err => console.log(err));
  }, []);

  
  return (
    <section>
      <div className="">
        <h1 className="text-3xl font-bold text-headingColor text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-4 gap-6 content-start p-8">
          {products.map(product => (
            <Product
              key={product._id}
              id={product._id}
              title={product.title}
              photo={product.photo}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
