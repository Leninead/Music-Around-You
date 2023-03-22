import Item from "./Item";
import { Container } from "@chakra-ui/react";
import { Spinner,Flex,Text } from "@chakra-ui/react";
const ItemList = ({ instruments }) => {
  if (instruments.length === 0) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
        <Text ml="2">Cargando...</Text>
      </Flex>
    )
  }
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
    
        {instruments?.map((instrument) => (
          <Item
            key={instrument.id}
            id={instrument.id}
            img={instrument.img}
            name={instrument.name}
            price={instrument.price}
            description={instrument.description}
            stock={instrument.stock}
            category={instrument.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
