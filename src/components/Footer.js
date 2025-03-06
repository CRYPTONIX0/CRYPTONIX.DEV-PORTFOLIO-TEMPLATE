import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Función principal del componente Footer
function Footer() {
  // Obtener el año actual
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    // Contenedor principal del footer
    <Container fluid className="footer">
      <Row>
        {/* Columna para el mensaje de derechos de autor */}
        <Col md="4" className="footer-copywright">
          <h3>Diseñado y desarrollado por CRYPTONIX.DEV</h3>
        </Col>
        {/* Columna para el año de derechos de autor */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CRYPTONIX.DEV</h3>
        </Col>
        {/* Columna para los iconos de redes sociales */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              {/* Enlace a GitHub */}
              <a
                href="https://github.com/CRYPTONIX0/"
                style={{ color: "blue" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              {/* Enlace a Twitter */}
              <a
                href="https://x.com/CryptonixDev"
                style={{ color: "blue" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              {/* Enlace a Instagram */}
              <a
                href="https://www.instagram.com/cryptonix.dev/"
                style={{ color: "blue" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
