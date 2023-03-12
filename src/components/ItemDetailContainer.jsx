import React from 'react'
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {  getFirestore, collection, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const instrumentsCollection = collection(db, "instruments");

    getDocs(instrumentsCollection).then((snapshot) => {
      const instruments = snapshot.docs.map((doc) => doc.data() )
      setData(instruments)
    });
  
  }, []);

  return <ItemDetail instruments={data}  />;
};

export default ItemDetailContainer