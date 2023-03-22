import { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/product/all_products`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No products are available in db");
        }
      })
      .then((json) => {
        console.log(json.data);
        setProducts(json.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">Our Products</h1>

      {/* if no product exists */}
      {products.length === 0 && <h2 className="text-center py-8">Loading...</h2>}

      {/* if products exist */}
      <div className="grid grid-cols-4 gap-4 content-center px-20 py-10">
        {products.map((product) => (
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
    </section>
  );
};
export default ProductsList;
