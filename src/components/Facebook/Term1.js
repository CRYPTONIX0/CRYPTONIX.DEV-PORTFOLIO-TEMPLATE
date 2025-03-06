import React from "react";

// Componente funcional que representa una tarjeta de privacidad
function Term1() {
  return (
    <div className="privacy-card">
      <p className="card-description">
      📌 Facebook recopila automáticamente información sobre tu actividad en el grupo (publicaciones, comentarios, interacciones). Nosotros, como administradores, solo tenemos acceso a la información pública de tu perfil según tu configuración de privacidad en Facebook.
      </p>
      {/* Agrega más detalles aquí según tu política de privacidad */}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Term1;