import { fetchCart, fetchUser } from "../util/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  cartShow: false,
  cartItems: cartInfo
};