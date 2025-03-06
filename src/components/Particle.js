import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      // Configuración de los parámetros de las partículas
      params={{
        particles: {
          number: {
            value: 160, // Número de partículas
            density: {
              enable: true, // Habilitar densidad de partículas
              value_area: 1500, // Área de densidad de partículas
            },
          },
          line_linked: {
            enable: false, // Deshabilitar líneas entre partículas
            opacity: 0.03, // Opacidad de las líneas
          },
          move: {
            direction: "right", // Dirección del movimiento de las partículas
            speed: 0.05, // Velocidad del movimiento de las partículas
          },
          size: {
            value: 1, // Tamaño de las partículas
          },
          opacity: {
            anim: {
              enable: true, // Habilitar animación de opacidad
              speed: 1, // Velocidad de la animación de opacidad
              opacity_min: 0.05, // Opacidad mínima en la animación
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true, // Habilitar interactividad al hacer clic
              mode: "push", // Modo de interactividad al hacer clic
            },
          },
          modes: {
            push: {
              particles_nb: 1, // Número de partículas añadidas al hacer clic
            },
          },
        },
        retina_detect: true, // Detectar pantallas retina
      }}
    />
  );
}

export default Particle;
