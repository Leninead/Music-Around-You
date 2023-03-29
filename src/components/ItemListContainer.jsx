 import ItemList from "./ItemList";

 import { useParams } from "react-router-dom";
 import {useEffect, useState} from "react";
 import {collection, getDocs, getFirestore} from "firebase/firestore"




const ItemListContainer = () => {




  const [loading, setLoading] = useState(true)

  const [instruments, setInstruments] = useState([]);
  const {category} = useParams();

  useEffect (() => {
    const db = getFirestore();
    const instrumentsCollection = collection(db, "instruments"); // Aquie llega todo el procedimiento de la promise
    getDocs(instrumentsCollection).then((querySnapshot) => {
      const instruments = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }) )
      setInstruments(instruments)
    })


  }, []);

const categoryFilter = instruments.filter((instrument) => instrument.category === category);






  return (
    <div>
       
    <h2 className="category-h2">Instruments by Category</h2>;

     { category ? <ItemList instruments={categoryFilter} /> : <ItemList instruments={instruments} /> }
    </div>


  )
  
  }

export default ItemListContainer