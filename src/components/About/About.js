import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    // Contenedor principal de la sección "About"
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* Título de la sección */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              CONOCE <strong className="purple">QUIEN SOY</strong>
            </h1>
            {/* Componente de la tarjeta de información personal */}
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* Imagen de la sección */}
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* Título de la sección de habilidades profesionales */}
        <h1 className="project-heading">
          Habilidades <strong className="purple">Profesionales </strong>
        </h1>

        {/* Componente de la pila de tecnologías */}
        <Techstack />

        {/* Título de la sección de herramientas */}
        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que uso.
        </h1>
        {/* Componente de la pila de herramientas */}
        <Toolstack />

        {/* Componente de Github */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
