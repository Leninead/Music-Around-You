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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

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


  return (
    <div className="container-info">
      <Center>
        <Heading size="md">Cart</Heading>
      </Center>
      {cart.length === 0 ? (
        <Text textAlign="center">No hay productos en el carrito</Text>
      ) : (
        cart.map((item) => (
          <Card key={item.id} maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
                <Text color="black.600" fontSize="2xl">
                  Quantity: {item.quantity}
                </Text>
                <Text color="black.600" fontSize="2xl">
                  Price: U$D {item.price}
                </Text>
                <Text color="black.600" fontSize="2xl">
                  Subtotal: U$D {item.subtotal}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="footer-buttons">
              <Button colorScheme="red">
                <DeleteIcon
                  onClick={() => removeFromCart(item.id)}
                  boxSize={6}
                />
              </Button>
            </CardFooter>
          
          </Card>
        ))
      )}

      <Container>
        <Text color="black.600" fontSize="2xl">
          Total: U$D {total}
        </Text>
        <Button colorScheme="blue" onClick={() => setCart([])}>
          Vaciar carrito
        </Button>
      </Container>

      <Container>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input placeholder="ejemplo: Lenin" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input placeholder="ejemplo:Acosta" />
        </FormControl>
        <FormControl>
          <FormLabel>Direccion de Email</FormLabel>
          <Input
            placeholder="Ejemplo: Lenin@gmail.com"
            size="md"
            type="email"
          />
        </FormControl>
        <Textarea placeholder="Deja aqui tus comentarios" />
      </Container>
    </div>
  );
};

export default Cart;
