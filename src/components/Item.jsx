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
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Item = ({ id, img, name, stock, category }) => {
  return (
    

      <div key={id}>
        <Center p="1rem">
          <Card className="card-container">
            <CardBody>
              <Image className="img-item" src={img} alt="" borderRadius="lg" />

              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text color="blue.800" fontSize="l">
                  Category: {category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center>
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Details</Link>
                </Button>
                <Button variant="ghost" colorScheme="blue"></Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
     
  );
};

export default Item;
