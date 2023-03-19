import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {
   const { id } = useParams();
   const [product, setProduct] = useState();
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND}/product/${id}`)
         .then((res) => res.json())
         .then((response) => {
            if (response.data.hasOwnProperty("_id")) setProduct(response.data);
            else setProduct(null);
            setLoading(false);
         });
   }, [id]);

   function handleChange(e) {
      const target = e.target;
      let value = target.value;
      const name = target.name;

      setProduct((currentProduct) => {
         return { ...currentProduct, [name]: value };
      });
   }

   function handleSubmit(e) {
      e.preventDefault();

      fetch(`${process.env.REACT_APP_BACKEND}/product/${id}`, {
         method: "PUT",
         body: JSON.stringify(product),
         headers: {
            "content-type": "application/json"
         }
      }).then(() => {
         navigate(`/pharmacy/products/product/${product._id}`);
      });
   }

   if (loading) {
      return (
         <>
            <p>Loading...</p>
         </>
      );
   } else {
      if (product) {
         return (
            <>
               <br />
               <br />
               <br />

               <div className="flex justify-center">
                  <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
                     <h2 className="text-lg font-medium text-gray-900 px-2 py-2 text-center">
                        Edit: {product.title}
                     </h2>
                     <br />
                     <form className="w-96" onSubmit={handleSubmit}>
                        <div className="form-group mb-6">
                           <input
                              type="text"
                              placeholder="Title"
                              name="title"
                              value={product.title}
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
                              placeholder="Price"
                              name="price"
                              value={product.price}
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
                              placeholder="Description"
                              name="description"
                              value={product.description}
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
                                 navigate(`/pharmacy/products/product/${product._id}`);
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
