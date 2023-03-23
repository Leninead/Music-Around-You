import Item from "./Item";
import { Spinner, Flex, Text, Wrap, Center } from "@chakra-ui/react";

const ItemList = ({ instruments }) => {
  if (instruments.length === 0) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
        <Text ml="2">Cargando...</Text>
      </Flex>
    );
  }

  return (
    <Wrap justify="center">
      {instruments?.map((instrument) => (
        <Center key={instrument.id}>
          <Item
          
            id={instrument.id}
            img={instrument.img}
            name={instrument.name}
            price={instrument.price}
            description={instrument.description}
            stock={instrument.stock}
            category={instrument.category}
          />
        </Center>
      ))}
    </Wrap>
  );
};

export default ItemList;
