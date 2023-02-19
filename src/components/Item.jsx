import React from "react";
import { Wrap, WrapItem, Center,Image,Text } from "@chakra-ui/react";

const Item = ({ id, name, stock, category, img }) => {
  return (
    <div key={id}>
      <Wrap >
        <WrapItem>
          <Center >
            {<Image src={img} /> }
            <h3>{name}</h3>
            <Text>
                Category: {category}
            </Text>
            <Text>
                Stock: {stock}
            </Text>
          </Center>
        </WrapItem>
     
      </Wrap>
    </div>
  );
};

export default Item;
