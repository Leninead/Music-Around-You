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


const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);



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
    clearCart();
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
          <Card key={product.id} maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image
                  className="img-item"
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

            <Button colorScheme="blue" onClick={handleCompraClick}>Comprar</Button>
            <SendOrder cart={cart} subtotal={subtotal} total={total} />

          </Container>
          
        </>
          
       )}
          
    </div>
  );
 
};

export default Cart;
