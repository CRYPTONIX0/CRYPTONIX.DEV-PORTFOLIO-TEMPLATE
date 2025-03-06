import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Función principal del componente Home2
function Home2() {
  return (
    // Contenedor principal con clase y id
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> PRESENTARME </span> 
            </h1>
            <p className="home-about-body">
            Me enamoré de la programación y al menos he aprendido algo, creo… 🤷‍♂️
              <br />
              <br />Soy fluido en clásicos como
              <i>
                <b className="purple"> C++, C#, Javascript, Python y Html. </b>
              </i>
              <br />
              <br />
              Mis campos de interés son la construcción de nuevas &nbsp;
              <i>
                <b className="purple">Tecnologías y productos web </b> y
                también en áreas relacionadas con{" "}
                <b className="purple">
                  desarrollo de software.
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por el desarrollo de productos
              con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas y marcos de Javascript modernos
                </b>
              </i>
              &nbsp; comó
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
            No dudes en <span className="purple">contactar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CRYPTONIX0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/CryptonixDev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cryptonix.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// Exporta el componente Home2 para que pueda ser utilizado en otras partes de la aplicación
export default Home2;
