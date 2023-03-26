import { useContext } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import CartContext from "../../contexts/CartContext";

const CartItem = ({ item }) => {
  const { decrementItemQty, incrementItemQty, removeItemFromCart } = useContext(CartContext);

  const currItem = {
    description: item.description,
    id: item.id,
    photo: item.photo,
    price: item.price,
    quantity: item.quantity,
    title: item.title,
  };

  return (
    <div className="flex flex-col gap-2 border rounded-lg px-4 py-2 bg-gray-100 border-black">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {/* Photo */}
          <img src={currItem.photo} alt={currItem.title} className="w-20 max-w-[90px] rounded-lg object-contain" />

          {/* Name and Price */}
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">{currItem.title}</h1>

            <p className="text-base">${currItem.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Qty and Qty Tools */}
        <div className="flex flex-col justify-center items-center text-lg gap-2">
          <p>Qty</p>

          <div className="flex flex-row justify-center items-center gap-4">
            <BiMinus
              className="bg-gray-300 rounded hover:cursor-pointer"
              onClick={() => {
                decrementItemQty(item);
              }}
            />
            <p>{currItem.quantity}</p>
            <BiPlus
              className="bg-gray-300 rounded hover:cursor-pointer"
              onClick={() => {
                incrementItemQty(item);
              }}
            />
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="p-2 mt-1 flex flex-row items-center justify-between border-t border-black">
        <p className="font-bold">Total: ${(currItem.price * currItem.quantity).toFixed(2)}</p>
        <button
          className="btn px-2 py-1"
          onClick={() => {
            removeItemFromCart(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
