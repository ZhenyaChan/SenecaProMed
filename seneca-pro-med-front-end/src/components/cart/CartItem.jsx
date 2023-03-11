import React, { useState, useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
let items = [];


const CartItem = ({ item, flag, setFlag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQuantity(quantity + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (quantity === 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQuantity(quantity - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.quantity -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [quantity, items]);

  return (
    <div className="w-full pr-3 border-0.5 border-gray-400 rounded-lg flex items-center gap-2">
      <img
        src={item?.photo}
        className="w-30 h-30 max-w-[90px] rounded-lg object-contain"
        alt="cartItem"
      />

      {/* Item Details */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-textColor">{item?.title}</p>
        <p className="text-sm block text-textColor font-semibold">
          ${(parseFloat(item?.price) * quantity).toFixed(2)}
        </p>
      </div>

      {/* Button */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.85 }} onClick={() => updateQty("remove", item?.id)}>
          <BiMinus className="text-textColor" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm text-textColor flex items-center justify-center">
          {quantity}
        </p>
        <motion.div whileTap={{ scale: 0.85 }} onClick={() => updateQty("add", item?.id)}>
          <BiPlus className="text-textColor" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
