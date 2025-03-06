import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

// Componente funcional AboutCard
function AboutCard() {
  return (
    // Componente Card de react-bootstrap con una clase personalizada
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">CRYPTONIX </span>
            de <span className="purple"> México.</span>
            <br />
            Actualmente estoy aprendiendo y trabajando en el desarrollo de aplicaciones web y móviles, venta de productos digitales y en la creación de contenido para redes sociales.
            <br />
            He completado varios cursos de programación y desarrollo web, y estoy buscando oportunidades para trabajar en proyectos de desarrollo web y móvil.
            <br />
            <br />
            Además de codificar, ¡hay otras actividades que me encanta hacer!
          </p>
          <ul>
            {/* Lista de actividades favoritas */}
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar música
            </li>
            <li className="about-activity">
              <ImPointRight /> Platicar con amigos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérsate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">CRYPTONIX</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

// Exporta el componente AboutCard para que pueda ser utilizado en otros archivos
export default AboutCard;
