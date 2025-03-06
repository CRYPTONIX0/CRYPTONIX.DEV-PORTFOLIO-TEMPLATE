import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ROBLOX from "./components/ROBLOX/TermsPrivacy";
import Facebook from "./components/Facebook/Facebook";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Estado para manejar la carga inicial de la aplicación
  const [load, upadateLoad] = useState(true);

  // useEffect para simular un preloader que desaparece después de 1.2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Componente de preloader que se muestra mientras 'load' es true */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Barra de navegación */}
        <Navbar />
        {/* Componente para manejar el scroll al cambiar de ruta */}
        <ScrollToTop />
        <Routes>
          {/* Definición de rutas para los diferentes componentes */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/TermsPrivacy" element={<ROBLOX />} />
          <Route path="/Facebook" element={<Facebook />} />
          {/* Redirección a la página principal si la ruta no existe */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
