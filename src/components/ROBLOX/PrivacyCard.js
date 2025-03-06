import React from "react";

// Componente funcional que representa una tarjeta de privacidad
function PrivacyCard() {
  return (
    <div className="privacy-card">
      {/* Título de la sección de recopilación de datos */}
      <h3 className="card-title">Recopilación de Datos</h3>
      {/* Descripción de la recopilación de datos */}
      <p className="card-description">
        Recopilamos información básica sobre tu cuenta, como nombre de usuario y actividad dentro de Roblox.
      </p>
      {/* Título de la sección de uso de la información */}
      <h3 className="card-title">Uso de la Información</h3>
      {/* Descripción del uso de la información */}
      <p className="card-description">
        Utilizamos esta información para personalizar tu experiencia dentro del juego y para fines de seguridad.
      </p>
      {/* Agrega más detalles aquí según tu política de privacidad */}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default PrivacyCard;
