import {
    Container,
   
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
    Textarea
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/ShoppingCartContext";


const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textArea, setTextArea] = useState("");
  const [email, setEmail] = useState("");
  const {cart} = useContext(CartContext);


  const db = getFirestore();


  const handleSubmint = (e) => {
    e.preventDefault();
    addDoc(oredersCollection, order).then(({ id }) => setOrderId(id));
  };
  const order = {
    name,
    lastName,
    email,
    textArea,
    cart
  };
  const oredersCollection = collection(db, "orden");
  return (
    <div>
      <Center>
        <Text className="formulario-id">Completa el formulario para recibir el Id track antes de comprar.</Text>
      </Center>

      <Container>
        <FormControl>
          <form onSubmit={handleSubmint}>
            <FormLabel>Nombre</FormLabel>
            <Input
              placeholder="ejemplo: Lenin"
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Apellido</FormLabel>
            <Input
              placeholder="ejemplo:Acosta"
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Ejemplo: Lenin@gmail.com"
              size="md"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              placeholder="Deja aqui tus comentarios"
              onChange={(e) => setTextArea(e.target.value)}
            />
            <Button type="submit">Enviar Informacion</Button>
          </form>
        </FormControl>
      </Container>
      {orderId && (
        <Center>
          <Text as="b" m={3} fontSize="xl">
            Order ID:{" "}
          </Text>
          <Text as="mark" fontSize="2xl">
            {orderId}
          </Text>
        </Center>
      )}
    </div>
  );
};


export default SendOrder;
