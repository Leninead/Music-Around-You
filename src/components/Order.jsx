import {useState} from "react";
import {collection, getFirestore, addDoc} from "firebase/firestore";


const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const db = getFirestore();

const handleSubmint = (e) => {
    e.preventDefault();
    addDoc(oredersCollection, order).then(({ id }) => setOrderId(id))
}
const order = {
    name,
    email,
};

const oredersCollection = collection(db, "orden")


return (
    <div>
        
    </div>
)

}

export default SendOrder; 