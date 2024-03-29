import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { MdClose } from "react-icons/md";
import EmptyCart from "../../assets/images/EmptyCart.jpeg";
import CartItem from "./CatItem";
import AuthContext from "../../contexts/AuthContext";

const Cart = () => {
  const { cartItems, totalItemsCount, subTotal, displayCart, removeAllItems } = useContext(CartContext);
  const { userData } = useContext(AuthContext);
  const [orderDetails, setOrderDetails] = useState({});
  const [message, setMessage] = useState("");

  const handlePlaceOrder = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/client/create_order`, {
      method: "POST",
      body: JSON.stringify(orderDetails),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Unable to place an order");
        }
      })
      .then((data) => {
        console.log(data);
        // reset cart and order details
        removeAllItems();
        setOrderDetails({});

        // display success message
        setMessage("Your order has been successfully placed");
      })
      .catch((err) => {
        console.error(err);
        setMessage("There was an error in placing the order");
      });
  };

  // Update order details with every change in cart items
  useEffect(() => {
    let pharmIds = [
      "63f10c3397afd41dfb506e99",
      "63f10c4e97afd41dfb506e9c",
      "63f10c5d97afd41dfb506e9f",
      "63f10c6a97afd41dfb506ea2",
      "63f1c75012b21d1cc0441f2f",
      "640e19962efb4149accb64df",
      "641cdd0f1517b29a60144cfb",
      "64230a79c41fba186191b95b",
      "642340776d0089d5461a1b54",
      "64234b55f039aff79d164590",
    ];

    setOrderDetails({
      datePlaced: new Date().toISOString().toString(),
      pharmacyId: pharmIds[Math.floor(Math.random() * pharmIds.length)],
      clientId: userData.id,
      products: cartItems,
    });
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="
        fixed
        top-0
        right-0
        z-10
        h-screen
        min-w-[450px]
        bg-white
        drop-shadow-lg
        flex flex-col mx-auto
        justify-between
        p-4
      "
    >
      <div className="flex justify-between items-center">
        {/* Top Container */}
        <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}>
          <MdClose className="text-2xl hover:cursor-pointer hover:text-blue-700" onClick={displayCart} />
        </motion.div>

        <h1>My Cart</h1>
        <motion.button whileTap={{ scale: 0.85 }} className="btn px-2 py-1" onClick={removeAllItems}>
          Clear
        </motion.button>
      </div>

      {/* Cart Items List */}
      {cartItems.length > 0 && totalItemsCount >= 0 ? (
        <div className="flex flex-col gap-2 w-full h-full overflow-y-scroll my-4 pr-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          {message ? (
            <div className="flex w-1/2 flex-col gap-6">
              <p className="text-xl text-tex font-semibold">{message}</p>
              <button className="btn px-3 py-2" onClick={displayCart}>
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img src={EmptyCart} className="w-300" alt="empty-cart" />
              <p className="text-xl text-textColor font-semibold">Add items to your cart</p>
            </div>
          )}
        </div>
      )}

      {/* Totals */}
      {subTotal > 0 && (
        <div>
          <div className="border-t-2 border-b-2 border-black p-2 mb-10 w-full">
            <div className="flex flex-row justify-between">
              <p className="text-lg">Subtotal: </p>
              <p className="text-lg">${subTotal.toFixed(2)}</p>
            </div>

            <div className="flex flex-row justify-between">
              <p className="text-lg">Delivery Fee: </p>
              <p className="text-lg">${2.5}</p>
            </div>

            <div className="flex flex-row justify-between mt-4 w-full">
              <p className="text-lg font-bold">Total Fee: </p>
              <p className="text-lg font-bold">${(2.5 + subTotal).toFixed(2)}</p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="w-full p-2 rounded-xl bg-red-500 text-gray-50 text-lg my-2 hover:shadow-lg"
            onClick={handlePlaceOrder}
          >
            Place Order
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
