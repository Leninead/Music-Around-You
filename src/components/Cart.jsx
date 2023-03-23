import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Container,
} from "@chakra-ui/react";
import {
  Center,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartCleared, setCartCleared] = useState(false);

  const db = getFirestore();

  const calculateTotal = () => {
    let subtotalValue = 0;
    let items = [];

    cart.forEach((item) => {
      const itemSubtotal = item.price * item.quantity;
      subtotalValue += itemSubtotal;
      items.push({ ...item, subtotal: itemSubtotal });
    });

    setSubtotal(subtotalValue);
    setTotal(subtotalValue);
    setCart(items);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setCartCleared(true);
  };
  const handleCompraClick = () => {
    Swal.fire({
      title: "¿Está seguro que desea comprar?",
      text: `El total de su compra es U$D ${total}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, comprar",
      cancelButtonText: "Cancelar",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "¡Compra realizada!",
            `Usted ha comprado productos por U$D ${total}.`,
            "success"
          );
        }
      })
      .then(() => {
        clearCart();
      });
  };

  return (
    <div className="container-info">
      <Center>
        <Heading size="md">Cart</Heading>
      </Center>
      {cart.length === 0 ? (
        <Text textAlign="center">No hay productos en el carrito</Text>
      ) : (
        cart.map((product) => (
          <Card  className="cart-container" key={product.id} maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image
                  className="img-cart"
                  src={product.img}
                  alt=""
                  borderRadius="lg"
                />
                <Heading size="md">{product.name}</Heading>
                <Text color="black.600" fontSize="2xl">
                  Quantity: {product.quantity}
                </Text>
                <Text color="black.600" fontSize="2xl">
                  Price: U$D {product.price}
                </Text>
                <Text color="black.600" fontSize="2xl">
                  Subtotal: U$D {product.subtotal}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="footer-buttons">
              <Button colorScheme="red">
                <DeleteIcon
                  onClick={() => removeFromCart(product.id)}
                  boxSize={6}
                />
              </Button>
            </CardFooter>
          </Card>
        ))
      )}

      {cart.length > 0 && (
        <>
          <Container>
            <Text color="black.600" fontSize="2xl">
              Total: U$D {total}
            </Text>
            <Button colorScheme="red" onClick={() => clearCart()}>
              Vaciar carrito
            </Button>

            <Button colorScheme="blue" onClick={handleCompraClick}>
              Comprar
            </Button>
            <SendOrder cart={cart} subtotal={subtotal} total={total} />
          </Container>
        </>
      )}
    </div>
  );
};

export default Cart;
