const reportWebVitals = onPerfEntry => {
  // Verifica si onPerfEntry es una función
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinámicamente el módulo 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llama a cada función de medición de rendimiento y pasa onPerfEntry como argumento
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;
