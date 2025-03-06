import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CRYPTONIX-CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // Estado para almacenar el ancho de la ventana
  const [width, setWidth] = useState(1200);

  // useEffect para actualizar el ancho de la ventana cuando el componente se monta
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* Componente de partículas de fondo */}
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Botón para descargar el CV */}
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>

        <Row className="resume">
          {/* Componente para mostrar el documento PDF */}
          <Document file={pdf} className="d-flex justify-content-center">
            {/* Página del PDF con escala ajustada según el ancho de la ventana */}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Botón para descargar el CV (repetido) */}
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
