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
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    console.log(updatedCart);
  };
  

  return (
    <div className="container-info">
    
      <Center>
        <Heading size="md">Cart</Heading>
        
      </Center>
      {cart.length === 0 ? (
        <Text textAlign="center">
          No hay productos en el carrito
        </Text>
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
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="footer-buttons">
              
              <Button colorScheme="blue" onClick={() => removeFromCart(item.id)} >
                Borrar del carrito
              </Button>
            </CardFooter>
          </Card>
        ))
      )}

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
}

export default Cart;

