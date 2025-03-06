import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Si tienes un componente para partículas
import Term1 from "./Term1";
import Term2 from "./Term2";
import Term3 from "./Term3";
import Term4 from "./Term4";
import Term5 from "./Term5";
import Term6 from "./Term6"; // Componente que contendría la política de privacidad
import "./TermsPrivacy.css"; // Estilos para esta página

// Componente principal para la política de privacidad de Facebook
function Facebook() {
  return (
    <Container fluid className="terms-privacy-section">
      <Particle /> {/* Si tienes un componente para partículas */}
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">📜 Política de Privacidad – Cryptonix Community | Facebook</strong>
            </h1>
            <p className="card-description">
            Bienvenido a Cryptonix Community 🚀. Valoramos tu privacidad y queremos asegurarnos de que tengas una experiencia segura dentro de nuestra comunidad. Al participar en este grupo, aceptas las siguientes condiciones:
            </p>
            <Row>
              <Col md={6}>
                <h2 className="section-heading">1. Información que Recopilamos</h2>
                <Term1 /> {/* Componente para los términos de servicio */}
              </Col>
              <Col md={6}>
                <h2 className="section-heading">2. Uso de la Información</h2>
                <Term2 /> {/* Componente para la política de privacidad actualizada */}
              </Col>
              <Col md={6}>
                <h2 className="section-heading">3. Seguridad y Privacidad</h2>
                <Term3 /> {/* Componente para los términos de servicio */}
              </Col>
              <Col md={6}>
                <h2 className="section-heading">4. Contenido Compartido</h2>
                <Term4 /> {/* Componente para los términos de servicio */}
              </Col>
              <Col md={6}>
                <h2 className="section-heading">5. Derechos y Responsabilidades</h2>
                <Term5 /> {/* Componente para los términos de servicio */}
              </Col>
              <Col md={6}>
                <h2 className="section-heading">6. Cambios en la Política</h2>
                <Term6 /> {/* Componente para los términos de servicio */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Facebook;