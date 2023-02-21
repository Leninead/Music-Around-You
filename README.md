# E-commerce
## Music Around You
### Te invitamos a vivir una experiencia musical!

_Music Around You Es una tienda de Musica donde no solo podras conseguir toda nuestra gamas de instrumentos, sino tambien variedad de cursos, talleres y noticias que te mantendran actualizado en toda la escena musical tanto nacional como internacional._

#### Acontinuación explicare algunos aspectos tecnicos usados para esta entrega.

Tenemos el componente Main que es el padre de todos en este importamos:

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

Despues sigue el componente App que representa toda nuestra aplicacion. En este importamos:

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

### A continuación dejo un Gif que muestra la navegabilidad en la apliación. Usando las rutas que se definieron en el componente APP:

![Video Rutas](./src/assets/Readme/Music-Around-You-Google-Chrome-2023-02-21-16-44-56.gif)



