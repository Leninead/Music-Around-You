 import ItemList from "./ItemList";
 import Data from "/data.json";
 import { useParams } from "react-router-dom";
 import {useEffect, useState} from "react";




const ItemListContainer = () => {
  const {category} = useParams();
  const [instrument, setInstruments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
     setInstruments(data)
      }catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

const categoryFilter = Data.filter((instrument) => instrument.category === category);

  return (
    <div>
    <h2 className="category-h2">Instruments by Category</h2>

     { category ? <ItemList instruments={categoryFilter} /> : <ItemList instruments={Data} /> }
    </div>


 



  );
};

export default ItemListContainer