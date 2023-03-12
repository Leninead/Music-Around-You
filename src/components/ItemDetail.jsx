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
  const { ID } = useParams();

  const [ product, setProduct] = useState([ID]);

  useEffect(() => {
    const db = getFirestore();

    const instRef = doc(db, "instruments", `${ID}`);

    getDoc(instRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data())
      }else {
        console.log("doesn't exists");
      }
    })
  }, [])


const instrumentsFilter = instruments.filter((instrument) => instrument.id == ID);

  return (
    <>
      {instrumentsFilter.map((instrument) => (
        <div key={instrument.ID}>
          <Center>
            <Card maxW="sm">
              <CardBody>
                <Image src={instrument.img} alt="" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{instrument.name}</Heading>
                  <Text color="black.600" fontSize="2xl">
                    Description: {instrument.description}
                  </Text>
                  <Text color="black.600" fontSize="2xl">
                    Category: {instrument.category}
                  </Text>
                  <Text color="red.600" fontSize="2xl">
                    Stock: {instrument.stock}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Price: $ {instrument.price}
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
