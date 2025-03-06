import React from "react";

// Componente funcional llamado Pre
function Pre(props) {
  // Retorna un div con un id que depende del valor de props.load
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

// Exporta el componente Pre para que pueda ser utilizado en otros archivos
export default Pre;
