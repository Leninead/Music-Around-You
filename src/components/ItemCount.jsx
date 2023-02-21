import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { MinusIcon, AddIcon,  } from "@chakra-ui/icons";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const resta = () => {
    if (count === 0) {
      return useState(0);
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(count * 0); //Hago este reset a ejemplo de lo que vimos en clase para cumplir con la consigna. Entiendo que despues esto se va a enviar al cart
  };

  return (
    <>
      <Button variant="solid" colorScheme="gray">
        <MinusIcon onClick={resta} />
      </Button>

      <Button onClick={reset} variant="solid" colorScheme="blue">
        Add to cart: {count}
      </Button>

        <Button variant="solid" colorScheme="gray">
          <AddIcon onClick={sumar} boxSize={4} />
        </Button>

      
       
      
    </>
  );
};

export default ItemCount;
