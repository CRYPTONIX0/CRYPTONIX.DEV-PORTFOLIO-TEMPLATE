import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Si tienes un componente para partículas
import TermsCard from "./TermsCard"; // Componente que contendría los términos de servicio
import PrivacyCard from "./PrivacyCard"; // Componente que contendría la política de privacidad
import "./TermsPrivacy.css"; // Estilos para esta página

// Función principal del componente TermsPrivacy
function TermsPrivacy() {
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
            {/* Título principal de la página */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}></h1>
            <p className="card-description">
              Al unirte a nuestras comunidades de Roblox, aceptas nuestros términos y condiciones de uso. Es importante que leas estos
              términos y nuestra política de privacidad antes de usar los servicios proporcionados.
            </p>
            <Row>
              <Col md={6}>
                <h2 className="section-heading">Términos de Servicio</h2>
                <TermsCard /> {/* Componente para los términos de servicio */}
              </Col>
              <Col md={6}>
                <h2 className="section-heading">Política de Privacidad</h2>
                <PrivacyCard /> {/* Componente para la política de privacidad */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Footer al final de la página */}
      <footer>
        <p>&copy; Comunidades gratuitas de Roblox By CRYPTONIX.DEV. Todos los derechos reservados.</p>
      </footer>
    </Container>
  );
}

export default TermsPrivacy;
