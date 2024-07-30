import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas en el archivo 11-async-await', () => {

  test('La funcion getImagen debe regresar la url del gif', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });

});