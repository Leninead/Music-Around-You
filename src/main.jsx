import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
//  import { getStorage, ref, uploadBytes } from "firebase/storage";
//NOTA: Estaba tratando de incorporar las imagenes por medio del Storage pero no me salio

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyADJKK97UUlUINrz_I45rpu_Zs1mlcf3CY",

  authDomain: "react-project-6dd81.firebaseapp.com",

  projectId: "react-project-6dd81",

  storageBucket: "react-project-6dd81.appspot.com",

  messagingSenderId: "559948118419",

  appId: "1:559948118419:web:bcdde21bed06b380425066"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);



//NOTA: Estaba tratando de incorporar las imagenes por medio del Storage pero no me salio, recurri a cargarlas copiando directamente su direccion 
//   const storage = getStorage();

//  const storageRef = ref(storage, 'images/sparky.jpg');

//  uploadBytes(storageRef, file).then((snapshot) => {
//   console.log("File uploaded successfully!");
// }).catch((error) => {
//   console.error("Error uploading file: ", error);
// });

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ChakraProvider>
    <App />
    </ChakraProvider>

  </React.StrictMode>,
)
