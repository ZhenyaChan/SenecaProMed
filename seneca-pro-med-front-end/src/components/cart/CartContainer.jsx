import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import EmptyCart from "../../assets/images/EmptyCart.jpeg";
import CartItem from "./CartItem";


const CartContainer = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator,item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      {/* Top section */}
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.85 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.85 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* Bottom Section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full flex flex-col">
          {/* Cart Items Section */}
          <div className="w-full h-600 px-6 py-6 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* Cart Item */}
            {cartItems &&
              cartItems.map((item, i) => (<CartItem key={i} id={item.id} item={item} setFlag={setFlag} flag={flag} />))}
          </div>

          {/* Totals Section */}
          <div className="w-full flex-1 flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-textColor text-lg">Sub Total:</p>
              <p className="text-textColor text-lg">$ {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-textColor text-lg">Delivery:</p>
              <p className="text-textColor text-lg">$ 2.50</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-textColor text-xl font-semibold">Total:</p>
              <p className="text-textColor text-xl font-semibold">$ {tot + 2.50}</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.85 }}
              type="button"
              className="w-full p-2 rounded-xl bg-red-500 text-gray-50 text-lg my-2 hover:shadow-lg"
            >
              Check Out
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="empty-cart" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
