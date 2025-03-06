import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// Componente principal de la sección de proyectos
function Projects() {
  return (
    // Contenedor principal de la sección de proyectos
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Tarjeta del proyecto Chatify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Sala de chat personal o espacio de trabajo para compartir recursos y pasar el rato con amigos, construido con react.js, Material-UI y Firebase. Tiene características que permiten la mensajería en tiempo real, el intercambio de imágenes y también admite reacciones en los mensajes."
            />
          </Col>

          {/* Tarjeta del proyecto Bits-0f-C0de */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Mi página de blog personal construida con Next.js y Tailwind Css que toma el contenido de archivos markdown y lo renderiza usando Next.js. Admite modo oscuro y es fácil escribir blogs usando markdown."
            />
          </Col>

          {/* Tarjeta del proyecto Editor.io */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Editor de código y markdown en línea construido con react.js. Editor en línea que admite código html, css y js con vista instantánea del sitio web. Editor de markdown en línea para construir archivos README que admite GFM, etiquetas Html personalizadas con barra de herramientas y vista previa instantánea. Ambos editores admiten el guardado automático del trabajo usando Local Storage."             
            />
          </Col>

          {/* Tarjeta del proyecto Plant AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Usé el conjunto de datos de enfermedades de plantas de Kaggle y entrené un modelo clasificador de imágenes usando el marco 'PyTorch' utilizando CNN y Transfer Learning con 38 clases de varias hojas de plantas. El modelo pudo detectar con éxito hojas enfermas y saludables de 14 plantas únicas. Pude lograr una precisión del 98% utilizando el modelo preentrenado Resnet34."
            />
          </Col>

          {/* Tarjeta del proyecto Ai For Social Good */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Usando 'Procesamiento de Lenguaje Natural' para la detección de publicaciones relacionadas con el suicidio y la ideación suicida de los usuarios en el ciberespacio, ayudando así en la prevención del suicidio."
            />
          </Col>

          {/* Tarjeta del proyecto Reconocimiento Facial y Detección de Emociones */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconocimiento Facial y Detección de Emociones"
              description="Entrené un clasificador CNN usando el conjunto de datos 'FER-2013' con Keras y tensorflow. El clasificador predijo con éxito los diversos tipos de emociones humanas. La mayor precisión obtenida con el modelo fue del 60.1%. Luego usé Open-CV para detectar la cara en una imagen y luego pasar la cara al clasificador para predecir la emoción de una persona."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
