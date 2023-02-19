import { useState } from "react";
import {

    Button,
  } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const ItemCount = () => {
  const [count, setCount] = useState(0);


const suma = () => {
    setCount(count + 1);
}

const resta = () => {
    if ( count === 0) {
        return  useState(0);
    } else { setCount(count - 1)}
   
}



  return (
    <>
      <Button variant="solid" colorScheme="gray">
        <MinusIcon onClick={resta} />
      </Button>

      <Button variant="solid" colorScheme="blue">
        Add to cart: {count}
      </Button>
      <Button variant="solid" colorScheme="gray">
        <AddIcon onClick={suma} boxSize={4} />
      </Button>
    </>
  );
};

export default ItemCount;
