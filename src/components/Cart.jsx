import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Container,
} from "@chakra-ui/react";
import {useState, useContext} from "react";
import { CartContext } from "../contexts/ShoppingCartContext";





const Cart = () => {

  const {cart, setCart} = useContext(CartContext );

  






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


//**Cart Context
// Descripcion de la actividad 
/*
-Implementa React Context para mantener el estado de compra del user

RECOMENDACIONES
1) Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto {name, price, quantity, etc} dentro del array de productos agregados
2) Detalle importarnte: CartContext debe tener la logica incorporada de no aceptar duplicados y mantener su consistencia.
3) Metodos recomendados:
   * addItem(item, quantity) // agregar cierta cantidad de un item al carrito.
   * removeItem(Itemld) //Remover un item del cart por usando su id
   * clear() // remover todos los itema
   * isInCart:(id) => true|false // Ver si el producto ya existe que no lo vuelva a agregar que actualice la cantidad
   

4)  Sacar el stock luego de la compra. Optativo

  -totales parciales:  suma de la cantidad de productos si vale 1000 y eligio tres de ese producto 3000. y un total de la compra de todos los productos

  - En el Cart van a estar los productos y un formulario que tome nombte, email, telefonos, porque cuando mi usuario este de acuerdo con la compra de los productos va a completar un for y ese for va a generar un id de la compra y ese id se lo damos al usuario para que tenga un seguimiento de su compra.
  Si no hay productos en el carrito no poner el formulario

*/