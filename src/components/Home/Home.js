import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo-header.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

/**
 * Componente Home que representa la sección principal de la página de inicio.
 * 
 * @component
 * @returns {JSX.Element} La sección de inicio con saludo, nombre y logo.
 * 
 * @example
 * return (
 *   <Home />
 * )
 * 
 * @description
 * Este componente renderiza una sección con un saludo, un nombre destacado y una imagen de logo.
 * Utiliza los componentes `Container`, `Row`, `Col`, `Particle`, `Type` y `Home2` para estructurar y estilizar el contenido.
 * 
 * - `Container`: Contenedor principal y contenedor de contenido.
 * - `Row`: Fila que contiene las columnas de saludo y logo.
 * - `Col`: Columnas para el saludo y el logo.
 * - `Particle`: Componente para efectos de partículas en el fondo.
 * - `Type`: Componente para efectos de escritura.
 * - `Home2`: Componente adicional para contenido extendido.
 */
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                SOY
                <strong className="main-name"> CRYPTONIX DEV</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
