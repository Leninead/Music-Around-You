import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
         <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Welcome greeting="Te invitamos a vivir una experiencia musical!" />
          }
        />
        ;
        <Route exact path="/catalogue" element={<ItemListContainer />} />;
        <Route
          eaxct
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />;
        <Route exact path="/cart" element={<Cart />} />;
      </Routes>
    </BrowserRouter>

    </ShoppingCartProvider>
 
  );
};
export default App;
