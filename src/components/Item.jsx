import React from "react";

import {
  Center,
  Card,
 CardBody,

  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";



import { Link } from "react-router-dom";

const Item = ({ id, img, name, stock, category }) => {
  return (
    <div key={id}>
      <Center>
      <Card  maxW="sm">
        <CardBody>
          <Image src={img} alt="" borderRadius="lg" />

          <Stack mt="6" spacing="4">
            <Heading size="md">{name}</Heading>
            <Text>Category: {category}</Text>
            <Text color="blue.600" fontSize="2xl">
              Stock: {stock}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
     
            <Button variant="solid" colorScheme="blue">
              <Link to={`/item/${id}`}>Details</Link>
            </Button>
            <Button variant="ghost" colorScheme="blue"></Button>
           
          </ButtonGroup>
        </CardFooter>
      </Card>

      </Center>

    


     
    </div>
  );
};

export default Item;
