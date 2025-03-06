import React from "react";
import Typewriter from "typewriter-effect";

// Componente funcional que utiliza el efecto de máquina de escribir
function Type() {
  return (
    <Typewriter
      options={{
        // Arreglo de cadenas de texto que se mostrarán en el efecto de máquina de escribir
        strings: [
          "Desarrollador de software",
          "Freelancer",
          "MERN Stack Developer",
          "Colaborador de código abierto",
          "Desarrollador de aplicaciones móviles",
          "Desarrollador de aplicaciones web",
        ],
        // Inicia automáticamente el efecto de máquina de escribir
        autoStart: true,
        // Hace que el efecto de máquina de escribir se repita en bucle
        loop: true,
        // Velocidad a la que se borran los caracteres
        deleteSpeed: 50,
      }}
    />
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Type;
