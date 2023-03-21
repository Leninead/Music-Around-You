import {
    Container,
    Heading,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
    Textarea
  } from "@chakra-ui/react";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";


const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textArea, setTextArea] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState(null);

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
  };
  const oredersCollection = collection(db, "orden");
  return (
    <div>
      <Center>
        <Heading>Sending orders</Heading>
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
      {formData && <Cart formData={formData} orderId={orderId} />}
      <Center>
        <Text as="b" m={3} fontSize="xl">
          Order ID:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>
    </div>
  );
};

export default SendOrder;
