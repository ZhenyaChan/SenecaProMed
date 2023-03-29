import React, { useEffect, useState } from "react";
import CartContext from "../contexts/CartContext";

const LOCAL_STORAGE_KEY = "senecaProMedCart";

const CartProvider = ({ children }) => {
  const initCartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  const initItemsCount = initCartItems.reduce((acc, item) => acc + item.quantity, 0);
  const initIsCartOpen = false;
  const initSubTotal = 0;

  const [cartItems, setCartItems] = useState(initCartItems);
  const [totalItemsCount, setTotalItemsCount] = useState(initItemsCount);
  const [isCartOpen, setIsCartOpen] = useState(initIsCartOpen);
  const [subTotal, setSubTotal] = useState(initSubTotal);

  useEffect(() => {
    // re-set cart items with what's in there
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));

    // update items count
    setTotalItemsCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));

    // update subtotal
    const newSubTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubTotal(newSubTotal);
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    // an array to hold cartItems to avoid manipulating state object directly
    const updatedCartItems = [...cartItems];

    // validate if the same product already exists inside the cart
    const existingProduct = updatedCartItems.find((p) => p.id === product.id);

    // push new product or increment if it exists
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      updatedCartItems.push({ ...product, quantity });
    }

    // set cartItems with the updated value
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);

    setCartItems(updatedCartItems);
  };

  const decrementItemQty = (product, quantity = 1) => {
    if (product.quantity > 0) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - quantity };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    }
  };

  const incrementItemQty = (product, quantity = 1) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const displayCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeAllItems = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setCartItems([]);
    setTotalItemsCount(0);
    setSubTotal(0);
  };

  const placeOrder = () => {

    var order = {}
    var products = []
    var index = 0

    function addProduct(product) {
      products[index++] = 
      { 
        title : product.title, 
        description : product.description,
        price : product.price,
        quantity : product.quantity,
        photo : product.photo
      }
    }

    cartItems.forEach(addProduct)

    let date = new Date().toISOString()
    // Adjust timezone

    order.datePlaced = date
    order.pharmacyId = "63f10c3397afd41dfb506e99" // Make random pharmacyId
    order.clientId = "63f0ec98ae8695d00d0efa86"   // Get from token
    order.products = products
    
    console.log("order: ", order)
    
    fetch(`${process.env.REACT_APP_BACKEND}/client/create_order`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
         "content-type": "application/json"
      }
   }).then(() => {
      // Message to client "order placed"
      // navigate to where?
      // Probably should navigate from Cart.jsx where the button is clicked? 
      
      //navigate(`../admin/pharmacies/all_pharmacies`);
   });
      
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemsCount,
        isCartOpen,
        subTotal,
        addToCart,
        removeItemFromCart,
        displayCart,
        removeAllItems,
        decrementItemQty,
        incrementItemQty,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
