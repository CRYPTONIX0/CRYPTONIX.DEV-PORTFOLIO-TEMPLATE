import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente que se encarga de hacer scroll hacia arriba cuando cambia la ruta
function ScrollToTop() {
  // Obtiene el pathname de la ubicación actual
  const { pathname } = useLocation();

  // Hook de efecto que se ejecuta cuando cambia el pathname
  useEffect(() => {
    // Hace scroll hacia la parte superior de la página
    window.scrollTo(0, 0);
  }, [pathname]); // Dependencia del efecto, se ejecuta cuando cambia el pathname

  return null; // No renderiza nada en la interfaz
}

export default ScrollToTop;
