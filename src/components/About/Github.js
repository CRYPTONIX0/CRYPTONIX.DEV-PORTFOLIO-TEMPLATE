import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

// Componente funcional que muestra el calendario de contribuciones de GitHub
function Github() {
  return (
    // Fila que centra el contenido y añade un padding inferior
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* Título del componente */}
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* Componente GitHubCalendar que muestra el calendario de contribuciones */}
      <GitHubCalendar
        username="CRYPTONIX0" // Nombre de usuario de GitHub
        blockSize={15} // Tamaño de cada bloque del calendario
        blockMargin={5} // Margen entre los bloques del calendario
        color="#c084f5" // Color de los bloques
        fontSize={16} // Tamaño de la fuente
      />
    </Row>
  );
}

export default Github;
