import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./routes/MainRouter"

function App() {
  return (
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  )
}

export default App;

/*
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";
*/

/*  
    <NavBar />
    <MainLayout>
      <ItemListContainer greeting="Bienvenidos a la tienda virtual de Saint-James"/>
    </MainLayout>
*/