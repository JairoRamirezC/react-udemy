import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en el archivo 09-promesas', () => {

  test('La funcion getHeroeByIdAsync debe regresar un heroe', (done) => {
    const id = 1;
    const objectResult = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }
    getHeroeByIdAsync(id)
      .then(res => {
        expect(res).toStrictEqual(objectResult)
        done()
      })
  });

  test('La funcion getHeroeByIdAsync debe regresar el mensaje de error "No se pudo encontrar el héroe" cuando el id no existe', (done) => {
    const id = 100;
    const objectResult = 'No se pudo encontrar el héroe';

    getHeroeByIdAsync(id)
      .catch(resp => {
        expect(resp).toBe(objectResult);
        done();
      })
  });

});