import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import About from "./components/About/About";


function App() {
  return (
    <>

    <Navbar />
    <Header />
    <About />
    <Proyectos />
    <Skills />
    <Contacto />
    
  
    </>

  );
}

export default App;
