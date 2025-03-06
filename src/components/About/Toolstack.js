import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiNetlify,
  SiHeroku,
  SiGlitch,
} from "react-icons/si";

// Función principal del componente Toolstack
function Toolstack() {
  return (
    // Fila que contiene los íconos, centrada y con padding inferior
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Columna que contiene el ícono de Glitch */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGlitch />
      </Col>
      {/* Columna que contiene el ícono de Heroku */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      {/* Columna que contiene el ícono de Netlify */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      {/* Columna que contiene el ícono de Windows */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      {/* Columna que contiene el ícono de Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Columna que contiene el ícono de Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Columna que contiene el ícono de Slack */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      {/* Columna que contiene el ícono de Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
