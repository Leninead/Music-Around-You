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
  ButtonGroup,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Item = ({ id, img, name, stock, category }) => {
  return (
    <div key={id}>
      <Center p="1rem">
        <Card className="card-container">
          <CardBody className="cards">
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
          <CardFooter className="footer-buttons">
            <ButtonGroup spacing="2">
              <Button className="details" variant="solid" colorScheme="blue">
                <Link to={`/item/${id}`}>Details</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default Item;
