import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Data from "/data.json";
import { useState, useEffect } from "react";


const ItemDetailContainer = () => {

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

  



  return <ItemDetail instruments={Data} />;
};

export default ItemDetailContainer;
