import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('La funcion getUser debe debe retornar un objeto', () => {
    const data = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const valueUser = getUser();

    expect(valueUser).toEqual(data);
  });

  test('La funcion getUserdebe retornar un objeto con la propiedad del nombre que se le pase', () => {
    const nombre = 'Jairo';
    const data = {
      uid: 'ABC567',
      username: nombre
    }

    const valueUser = getUsuarioActivo(nombre);

    expect(valueUser).toEqual(data);
  });

})