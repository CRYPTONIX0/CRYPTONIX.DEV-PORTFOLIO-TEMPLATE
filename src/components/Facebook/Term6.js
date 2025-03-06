import React from "react";

// Componente funcional Term6
function Term6() {
  return (
    // Contenedor principal con clase "privacy-card"
    <div className="privacy-card">
      {/* Párrafo con descripción de la tarjeta */}
      <p className="card-description">
      🔄 Podemos actualizar esta Política de Privacidad en cualquier momento. Te recomendamos revisarla periódicamente.
      </p>
      {/* Título de la tarjeta */}
      <h3 className="card-title">Uso de la Información</h3>
      {/* Párrafo con información de contacto */}
      <p className="card-description">
      📩 Si tienes dudas, puedes contactarnos a través de cryptonix@cryptonix.dev.
      </p>
      {/* Agrega más detalles aquí según tu política de privacidad */}
    </div>
  );
}

// Exporta el componente Term6 para su uso en otros archivos
export default Term6;