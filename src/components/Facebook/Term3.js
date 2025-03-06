import React from "react";

// Componente funcional que representa la tarjeta de privacidad
function Term3() {
  return (
    <div className="privacy-card">
      {/* Título de la tarjeta */}
      <h3 className="card-title">🔐 Respetamos tu privacidad y no permitimos:</h3>
      
      {/* Descripción de la primera política de privacidad */}
      <p className="card-description">
      ✅ La difusión de información personal sin consentimiento.
      </p>
      
      {/* Título de la segunda política de privacidad */}
      <h3 className="card-title">///</h3>
      
      {/* Descripción de la segunda política de privacidad */}
      <p className="card-description">
      ✅ La recopilación de datos de otros miembros con fines comerciales o malintencionados.
      </p>
      
      {/* Título de la tercera política de privacidad */}
      <h3 className="card-title">///</h3>
      
      {/* Descripción de la tercera política de privacidad */}
      <p className="card-description">
      ✅ Contenido que viole las políticas de Facebook o normas de privacidad.
      </p>
      
      {/* Comentario para agregar más detalles según la política de privacidad */}
      {/* Agrega más detalles aquí según tu política de privacidad */}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Term3;