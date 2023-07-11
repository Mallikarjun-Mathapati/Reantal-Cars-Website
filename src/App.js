import "./App.css";
import NavBar from "./Componets/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Testimonials from "./Pages/Testimonials";
import VehicleModels from "./Pages/VehicleModels";
import Contact from "./Pages/Contact";
import Footer from './Componets/Footer';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="vehiclemodels" element={<VehicleModels/>} />
        <Route exact path="testimonials" element={<Testimonials />} />
        <Route exact path="contact" element={<Contact />} />
        <Route path='*' element = {Home}/>
      </Routes>
      <Footer></Footer>
      
    </>
  );
}

export default App;
