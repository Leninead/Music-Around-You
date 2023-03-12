
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'


const CartWidget = () => {
  const {cart, setCart} = useContext(CartContext );

  const quantity = cart.reduce((cc, curr) => { return acc + curr.quantity;}, 0 );

  return (
    <div>
     

      <span className="material-symbols-outlined" >
        shopping_cart
      </span>
     
      <span className='cart-numerito'>{quantity}</span>
 
     

    </div>
  )
}

export default CartWidget