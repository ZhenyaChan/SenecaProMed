import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProductForm = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState();

    useEffect(()=> {
        setProduct({
            title: "Pain Kill Pill",
            description: "very nice and helpful, especially for school",
            price: 99.99,
            photo: "https://media.istockphoto.com/id/1218262810/vector/medicine-bottle-icon-medical-and-pharmaceutical-design-element-medicament-symbol.jpg?s=612x612&w=is&k=20&c=hNdd16dKzssLpxw1j7YPwWgKGRo-75O2dDRvWPyqDds="
        });
    }, []);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setProduct(currentProduct => {
            return {...currentProduct, [name]: value };
        });
    };

    const resetForm = () => {
        setProduct({
            title: "",
            description: "",
            price: 0,
            photo: "https://media.istockphoto.com/id/1218262810/vector/medicine-bottle-icon-medical-and-pharmaceutical-design-element-medicament-symbol.jpg?s=612x612&w=is&k=20&c=hNdd16dKzssLpxw1j7YPwWgKGRo-75O2dDRvWPyqDds="
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/product/add_product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    const created = await response.json();
    resetForm();
    if (created) {
      console.log(created);
      navigate("/home");
    }
    };


if (product)
  return (
    <div>
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        Title: 
        <input type="text" name="title" value={product.title} onChange={handleChange}/>
        <br />
        Price: 
        <input type="text" name="price" value={product.price} onChange={handleChange}/>
        <br />
        Description: <br />
        <textarea name="description" value={product.description} onChange={handleChange}></textarea>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
