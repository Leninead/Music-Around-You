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
  Spinner,
  Flex,
  

} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetail = ({ instruments}) => {

  const { id } = useParams();
 

  const [ product, setProduct] = useState([id]);
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    const db = getFirestore();

    const instRef = doc(db, "instruments", `${id}`);

    getDoc(instRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data())
      }else {
        console.log("doesn't exists");
      }
      setIsLoading(false); // <-- set isLoading to false when the data is fetched
    })
  }, [])
  

const instrumentsFilter = instruments.filter((instrument) => instrument.id === id);

if (isLoading) { // <-- display spinner while isLoading is true
  return (
    <Flex align="center" justify="center" height="100vh">
      <Spinner size="xl" color="blue.500" />
      <Text ml="2">Cargando...</Text>
    </Flex>
  )
}

  return (
    <>
      {instrumentsFilter.map((product) => (
        <div key={product.id}>
          <Center>
            <Card maxW="sm">
              <CardBody className="card-detail">
                <div className="img-detail">
                <Image className="img-item" src={product.img} alt="" borderRadius="lg" />
                </div>
                <Stack  mt="6" spacing="3">
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
                <ItemCount
                img={product.img}
                stock={product.stock}
                id={product.id}
                price={product.price}
                name={product.name}
                
                />
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


