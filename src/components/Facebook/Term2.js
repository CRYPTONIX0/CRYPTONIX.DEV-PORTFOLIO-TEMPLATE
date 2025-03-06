import React from "react";

// Componente funcional que representa los términos de privacidad
function Term2() {
  return (
    <div className="privacy-card">
      {/* Descripción de la política de privacidad */}
      <p className="card-description">
      🔹 La información compartida dentro de la comunidad se utiliza únicamente para fomentar el aprendizaje, la colaboración y la interacción entre los miembros.
      </p>
      {/* Título de la tarjeta de privacidad */}
      <h3 className="card-title">///</h3>
      {/* Descripción adicional de la política de privacidad */}
      <p className="card-description">
      🔹 No recopilamos ni vendemos información personal a terceros.
      </p>
      {/* Agrega más detalles aquí según tu política de privacidad */}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Term2;