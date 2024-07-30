import { getSaludo } from "../../base-pruebas/02-template-string"

describe('Pruebas en 02-template-string.js', () => { 

  test('Funcion getSaludo debe regresar el nombre concatenado con el saludo', () => {
    const firstName = 'Jairo';
    const response = getSaludo(firstName);
    expect(response).toBe(`Hola ${firstName}`);
  })

})