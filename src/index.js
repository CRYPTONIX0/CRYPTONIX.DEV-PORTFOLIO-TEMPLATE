import React from "react"; // Importa la librería de React
import ReactDOM from "react-dom/client"; // Importa la librería de ReactDOM para manipular el DOM
import "./index.css"; // Importa el archivo de estilos CSS
import App from "./App"; // Importa el componente principal de la aplicación
import reportWebVitals from "./reportWebVitals"; // Importa la función para reportar métricas de rendimiento

// Crea un root en el elemento con id "root" en el DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza el componente App en el root
root.render(<App />);

// Llama a la función para reportar métricas de rendimiento
reportWebVitals();
