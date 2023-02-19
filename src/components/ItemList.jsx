 import Item from "./Item"
 import { Container } from "@chakra-ui/react";

 const ItemList = ({instruments}) =>  {
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
   )
 }

 export default ItemList;