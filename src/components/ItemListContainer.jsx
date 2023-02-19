 import ItemList from "./ItemList";
 import Data from "../data.json"
 import { useParams } from "react-router-dom";




const ItemListContainer = () => {

  const {category} = useParams();

  const categoryFilter = Data.filter((instrument) => instrument.category === category);

  return (
    <div>
    <h1>Instruments by Category</h1>

     { category ? <ItemList instruments={categoryFilter} /> : <ItemList instruments={Data} /> }
    </div>


 



  );
};

export default ItemListContainer