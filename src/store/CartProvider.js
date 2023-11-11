import React, { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  // Initialising useReducer hook
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    //console.log(item); 
    dispatchCartAction({ type: "ADD", item: item });
  };
  const hideCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemToCartHandler,
    removeItem: hideCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
