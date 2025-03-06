import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// Componente funcional que recibe propiedades (props)
function ProjectCards(props) {
  return (
    // Componente de tarjeta de Bootstrap con una clase personalizada
    <Card className="project-card-view">
      {/* Imagen de la tarjeta */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {/* Título de la tarjeta */}
        <Card.Title>{props.title}</Card.Title>
        {/* Descripción de la tarjeta */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Botón que redirige al enlace de GitHub */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "" : ""}
        </Button>
        {"\n"}
        {"\n"}

        {/* Si el componente contiene un enlace de demostración y no es un blog, renderiza el siguiente botón */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
