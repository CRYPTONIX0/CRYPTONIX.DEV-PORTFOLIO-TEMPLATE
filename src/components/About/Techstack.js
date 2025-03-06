import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

// Componente funcional que representa la pila de tecnologías
function Techstack() {
  return (
    // Fila que contiene los iconos de las tecnologías
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Columna que contiene el icono de C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* Columna que contiene el icono de JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* Columna que contiene el icono de Go */}
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      {/* Columna que contiene el icono de Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* Columna que contiene el icono de React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* Columna que contiene el icono de Solidity */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      {/* Columna que contiene el icono de MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* Columna que contiene el icono de Next.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      {/* Columna que contiene el icono de Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* Columna que contiene el icono de Firebase */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* Columna que contiene el icono de Redis */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      {/* Columna que contiene el icono de PostgreSQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      {/* Columna que contiene el icono de Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* Columna que contiene el icono de Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
