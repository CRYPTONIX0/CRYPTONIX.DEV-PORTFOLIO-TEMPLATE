import React from "react";

// Componente funcional que representa los términos y condiciones de la comunidad
function Term4() {
  return (
    <div className="privacy-card">
      <p className="card-description">
        📌 Todo lo que compartas en Cryptonix Community será visible para los miembros del grupo. Te recomendamos no publicar información confidencial.
      </p>
      <h3 className="card-title">///</h3>
      <p className="card-description">
        📌 El contenido puede ser moderado por los administradores para mantener un ambiente seguro y alineado con la temática del grupo.
      </p>
      {/* Agrega más detalles aquí según tu política de privacidad */}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Term4;