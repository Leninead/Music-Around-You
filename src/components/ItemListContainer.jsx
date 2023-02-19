 import ItemList from "./ItemList";
 import Data from "../data.json"
 import { useParams } from "react-router-dom";




const ItemListContainer = () => {

  const {category} = useParams();

  const categoryFilter = Data.filter((instrument) => instrument.category === category);

  return (
    <div>
    <h2 className="category-h2">Instruments by Category</h2>

     { category ? <ItemList instruments={categoryFilter} /> : <ItemList instruments={Data} /> }
    </div>


 



  );
};

export default ItemListContainer