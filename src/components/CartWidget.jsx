import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const CartWidget = () => {
  const { cart, setCart } = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  
  if (quantity === 0) {
    return (
      <div className="CartWidget-Container" >
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    );
  }

  return (
    <>
      <div className="CartWidget-Container" >
        <span className="material-symbols-outlined">shopping_cart</span>

      
      </div>
      <span className="cart-numerito">{quantity}</span>
    </>
  );
};

export default CartWidget;
