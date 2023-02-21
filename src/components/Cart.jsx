import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Container,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <div className="container-info">
      <p className="info-cart">No hay productos en el carrito</p>
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
        <Textarea placeholder='Deja aqui tus comentarios' />
      </Container>
    </div>
  );
};

export default Cart;
