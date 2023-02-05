import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"



const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
      greeting="Te invitamos a vivir una experiencia musical!" />
    </>
  )
}
export default App
