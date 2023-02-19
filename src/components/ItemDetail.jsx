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
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({ instruments }) => {
  const { id } = useParams();

  const instrumentsFilter = instruments.filter(
    (instrument) => instrument.id == id
  );

  return (
    <>
      {instrumentsFilter.map((instrument) => (
        <div key={instrument.id}>
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
};

export default ItemDetail;
