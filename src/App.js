import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);


  return (
    <>
    <Navbar  isOpen={isOpen} setIsOpen={setIsOpen} />
    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
