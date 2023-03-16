import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const {cart, setCart} = useContext(CartContext);
  const [count, setCount] = useState(0);

  const sumar = () => {
    const newCount = count + 1;
    if (newCount <= stock) {
      setCount(newCount);
    } else {
      Swal.fire("Lo sentimos, no hay más stock disponible");
    }
  };

  const resta = () => {
    if (count === 0) {
      return useState(0);
    } else {
      setCount(count - 1);
    }
  };



  const agregarAlCarrito = () => {
    setCart((cartItems) => {
      const productoAgregado = cartItems.find((item) => item.id === id);

      if (productoAgregado) {
        return cartItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + count};
          } else {
            return item;
          }
        });
      } else{
        return [...cartItems, {id, quantity: count, price, name}]

      }
    });
  };

 
  return (
    <>

      <Button variant="solid" colorScheme="gray">
        <MinusIcon onClick={resta} />
      </Button>

      <Button onClick={agregarAlCarrito} variant="solid" colorScheme="blue">
       Add to cart: {count}
       </Button>

      <Button variant="solid" colorScheme="gray" onClick={sumar} >
        <AddIcon boxSize={4} />
      </Button>
    </>
  );
};

export default ItemCount;
