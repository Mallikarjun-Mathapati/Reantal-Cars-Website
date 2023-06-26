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
        <Route exect path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehiclemodels" element={<VehicleModels/>} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
      
    </>
  );
}

export default App;
