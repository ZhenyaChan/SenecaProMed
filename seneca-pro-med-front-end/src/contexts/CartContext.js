import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalItemsCount: 0,
  isCartOpen: false,
  subTotal: 0,

  addToCart: () => {},
  removeItemFromCart: () => {},
  displayCart: () => {},
  removeAllItems: () => {},
  decrementItemQty: () => {},
  incrementItemQty: () => {},
});

export default CartContext;
