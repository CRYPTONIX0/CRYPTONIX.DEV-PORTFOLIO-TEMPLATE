import React from "react";

// Componente funcional que representa una tarjeta de términos
function TermsCard() {
  return (
    <div className="terms-card">
      {/* Título de la sección de uso de la comunidad */}
      <h3 className="card-title">Uso de la Comunidad</h3>
      {/* Descripción de las reglas de conducta para los usuarios */}
      <p className="card-description">
        Los usuarios deben respetar las reglas de conducta y no realizar actividades ilegales dentro del juego.
      </p>
      {/* Título de la sección de prohibición de contenido */}
      <h3 className="card-title">Prohibición de contenido</h3>
      {/* Descripción de las restricciones sobre el contenido que se puede subir */}
      <p className="card-description">
        Está prohibido subir contenido que infrinja las leyes de propiedad intelectual o que sea ofensivo.
      </p>
      {/* Agrega más detalles aquí según tus términos */}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default TermsCard;
