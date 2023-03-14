import {
  Center,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,

} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetail = ({ instruments}) => {

  const { id } = useParams();
  console.log(id);

  const [ product, setProduct] = useState([id]);

  useEffect(() => {
    const db = getFirestore();

    const instRef = doc(db, "instruments", `${id}`);

    getDoc(instRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data())
      }else {
        console.log("doesn't exists");
      }
    })
  }, [])


const instrumentsFilter = instruments.filter((instrument) => instrument.id === id);

  return (
    <>
      {instrumentsFilter.map((product) => (
        <div key={product.id}>
          <Center>
            <Card maxW="sm">
              <CardBody>
                <Image src={product.img} alt="" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.name}</Heading>
                  <Text color="black.600" fontSize="2xl">
                    Description: {product.description}
                  </Text>
                  <Text color="black.600" fontSize="2xl">
                    Category: {product.category}
                  </Text>
                  <Text color="red.600" fontSize="2xl">
                    Stock: {product.stock}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Price: $ {product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="footer-buttons">
                <ButtonGroup spacing="2">
                <ItemCount />
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );

      }
export default ItemDetail;


/*
import {
  Center,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,

} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetail = () => {
  const { ID } = useParams();

  const [ product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const instRef = doc(db, "instruments", `
 1akmwXjUBiDVJCIZkJwD `);

    getDoc(instRef).then((snapshot) => {
      if (snapshot.exists()) {
       
        setProduct(snapshot.data())
      }else {
        console.log("doesn't exists");
      }
    })
  }, [])




  return (
    <>
      {product.map((product) => (
        <div key={product.ID}>
          <Center>
            <Card maxW="sm">
              <CardBody>
                <Image src={product.img} alt="" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.name}</Heading>
                  <Text color="black.600" fontSize="2xl">
                    Description: {product.description}
                  </Text>
                  <Text color="black.600" fontSize="2xl">
                    Category: {product.category}
                  </Text>
                  <Text color="red.600" fontSize="2xl">
                    Stock: {product.stock}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Price: $ {product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="footer-buttons">
                <ButtonGroup spacing="2">
                <ItemCount />
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );

      }
export default ItemDetail;
*/