# E-commerce
## Music Around You
### Te invitamos a vivir una experiencia musical!

_Music Around You Es una tienda de Musica donde no solo podras conseguir toda nuestra gamas de instrumentos, sino que proximamente te estaremos brindando variedades de cursos, talleres y noticias que te mantendran actualizado en toda la escena musical tanto nacional como internacional._

#### Acontinuación explicare algunos aspectos tecnicos usados para esta entrega.

## Instalación
To install the dependencies, run:
```
npm install
```
Para ejecutar la App, run:
```
npm run dev
```
## Dependencias

   * react - main library for building the UI
   * react-router-dom - for routing within the application
   * @chakra-ui/react - for styling components
   * firebase - for handling the shopping cart and submitting orders
   * sweetalert2 - for displaying alerts and modals


## Estructura de archivos

  *   src/App.js - main component for the website
  * src/components - directory for all the components used in the website
  *  src/contexts - directory for the   ShoppingCartContext used in the shopping cart functionality
  *  src/index.css - global CSS styles
  *  src/index.js - entry point of the application
  *  src/data - directory for the JSON data used to populate the catalogue of instruments


Caracteristicas de algunos componentes y sus importaciones:
### Main
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<ChakraProvider>
<App />
</ChakraProvider>
</React.StrictMode>,
)

```

### APP 
Representa toda nuestra aplicacion. En este importamos:

```import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";

```
Despues tenemos dos componentes Contenedores. El primero es el ItemListContainer tiene logica, y trae informacion de la Api, en este caso del Json y se la pasa al ItemList

```
 import ItemList from "./ItemList";
 import Data from "/data.json";
 import { useParams } from "react-router-dom";
 import {useEffect, useState} from "react";

```
El ItemList hace un Map para mapear todos los items existentes. En este importamos:
```
 import Item from "./Item"
 import { Container } from "@chakra-ui/react";

```
Y luego el ultimo componente de nuestro padre ItemListContainer, es el Item. El cual presenta todos los items o productos que tenemos. Este importo

```
import React from "react";

 import {
 Card,
 CardBody,
 Image,
 Stack,
 Heading,
 Text,
 Divider,
 CardFooter,
 ButtonGroup,
 Button,
} from "@chakra-ui/react";



import { Link } from "react-router-dom";

```

El segundo componente contenedor es el ItemDetailContainer.Como todo componente contenedor maneja logica y trae informacion de la Api para pasarselo a su hijo Itemdetail

```
import {
  Center,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

```
ItemDteail importa al ItemCount

```
import {
  Center,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

```

### A continuación dejo un Gif que muestra la navegabilidad en la apliación.


![Video Rutas](./src/assets/Readme/Music-Around-You-%E2%80%94-Mozilla-Firefox-2023-03-23-20-33-03.gif)

[Mi perfil de Linkedln](https://www.linkedin.com/in/lenin-acosta-b32b8a262/)




