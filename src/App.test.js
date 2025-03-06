import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  /**
   * @constant {HTMLElement} linkElement - Elemento del DOM que contiene el texto "learn react".
   * Utiliza la función `getByText` de la biblioteca `screen` para buscar un elemento que contenga
   * el texto "learn react" (sin importar mayúsculas o minúsculas) en el documento.
   */
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
